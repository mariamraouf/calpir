import { serve } from "https://deno.land/std@0.190.0/http/server.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

serve(async (req) => {
  // Handle CORS preflight request
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const {
      fullName,
      email,
      phoneNumber,
      companyName,
      existingWebsite,
      countryOfHeadquarters,
      businessType,
      industry,
      otherIndustry,
      businessStage,
      businessOperationModel,
      biggestChallenge,
      currentAssets,
      packagePreference,
      budgetRange,
      addOnInterests,
      addOnRequirements,
      primaryGoals,
      otherPrimaryGoal,
      currentSystems,
      preferredPlatforms,
      systemPriorities,
      additionalDetails,
      timeline,
    } = await req.json();

    // Retrieve ClickUp API token and list ID from environment variables
    const CLICKUP_API_TOKEN = Deno.env.get('CLICKUP_API_TOKEN');
    const CLICKUP_LIST_ID = Deno.env.get('CLICKUP_LIST_ID');

    if (!CLICKUP_API_TOKEN || !CLICKUP_LIST_ID) {
      throw new Error('ClickUp API token or List ID not configured.');
    }

    // Construct task description
    let description = `**New Business Inquiry from Calpir Website**\n\n`;
    description += `**Contact Information:**\n`;
    description += `- Full Name: ${fullName}\n`;
    description += `- Email: ${email}\n`;
    description += `- Phone Number: ${phoneNumber || 'N/A'}\n`;
    description += `- Company Name: ${companyName || 'N/A'}\n`;
    description += `- Existing Website: ${existingWebsite || 'N/A'}\n`;
    description += `- Country of Headquarters: ${countryOfHeadquarters || 'N/A'}\n\n`;

    description += `**Business Details:**\n`;
    description += `- Business Type: ${businessType || 'N/A'}\n`;
    description += `- Industry: ${industry === 'Other' ? otherIndustry : industry || 'N/A'}\n`;
    description += `- Business Stage: ${businessStage || 'N/A'}\n`;
    description += `- Operation Model: ${businessOperationModel || 'N/A'}\n`;
    description += `- Biggest Challenge: ${biggestChallenge || 'N/A'}\n`;
    description += `- Current Assets: ${currentAssets.length > 0 ? currentAssets.join(', ') : 'None'}\n\n`;

    description += `**Systems & Platforms:**\n`;
    description += `- Current Systems: ${currentSystems || 'N/A'}\n`;
    description += `- Preferred Platforms: ${preferredPlatforms || 'N/A'}\n`;
    description += `- System Priorities: ${systemPriorities.length > 0 ? systemPriorities.join(', ') : 'None'}\n\n`;

    description += `**Package & Add-On Interests:**\n`;
    description += `- Package Preference: ${packagePreference || 'N/A'}\n`;
    description += `- Budget Range: ${budgetRange || 'N/A'}\n`;
    description += `- Add-On Interests: ${addOnInterests.length > 0 ? addOnInterests.join(', ') : 'None'}\n`;
    description += `- Add-On Requirements: ${addOnRequirements || 'N/A'}\n\n`;

    description += `**Project Goals & Timeline:**\n`;
    description += `- Primary Goal(s): ${primaryGoals.length > 0 ? primaryGoals.join(', ') : 'N/A'}\n`;
    description += `- Other Primary Goal: ${otherPrimaryGoal || 'N/A'}\n`;
    description += `- Timeline: ${timeline || 'N/A'}\n`;
    description += `- Additional Details: ${additionalDetails || 'N/A'}\n`;

    const taskName = `New Inquiry: ${companyName || fullName}`;

    const clickUpResponse = await fetch(
      `https://api.clickup.com/api/v2/list/${CLICKUP_LIST_ID}/tasks`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': CLICKUP_API_TOKEN,
        },
        body: JSON.stringify({
          name: taskName,
          description: description,
          status: 'Open', // Or any default status you prefer
          priority: 3, // Or any default priority you prefer (1-4)
          // You can add more fields here if needed, e.g., assignees, tags
        }),
      }
    );

    if (!clickUpResponse.ok) {
      const errorData = await clickUpResponse.json();
      console.error('ClickUp API Error:', errorData);
      throw new Error(`Failed to create ClickUp task: ${clickUpResponse.statusText}`);
    }

    const clickUpTask = await clickUpResponse.json();
    console.log('ClickUp task created:', clickUpTask);

    return new Response(JSON.stringify({ message: 'Inquiry sent successfully!', taskId: clickUpTask.id }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      status: 200,
    });
  } catch (error) {
    console.error('Error processing request:', error.message);
    return new Response(JSON.stringify({ error: error.message }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      status: 500,
    });
  }
});