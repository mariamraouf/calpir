"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { MadeWithDyad } from "@/components/made-with-dyad";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Puzzle } from "lucide-react";

interface Platform {
  name: string;
  logo?: string; // Path to logo image (either local or CDN)
}

interface PlatformCategory {
  name: string;
  platforms: Platform[];
}

const platformCategories: PlatformCategory[] = [
  {
    name: "Project Management",
    platforms: [
      { name: "Asana", logo: "/logos/asana.png" },
      { name: "Monday.com", logo: "/logos/monday-com.png" },
      { name: "Trello", logo: "/logos/trello.png" },
      { name: "Jira", logo: "/logos/jira.png" },
      { name: "ClickUp", logo: "/logos/clickup.png" },
      { name: "Basecamp", logo: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/basecamp.svg" },
      { name: "Wrike", logo: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/wrike.svg" },
      { name: "Notion", logo: "/logos/notion.png" },
      { name: "Microsoft Planner", logo: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/microsoftplanner.svg" },
      { name: "Smartsheet", logo: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/smartsheet.svg" },
      { name: "Teamwork", logo: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/teamwork.svg" },
      { name: "Airtable", logo: "/logos/airtable.png" },
      { name: "Todoist", logo: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/todoist.svg" },
      { name: "Zenkit", logo: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/zenkit.svg" },
      { name: "Workiom" },
      { name: "Taiga", logo: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/taiga.svg" },
      { name: "Freedcamp" },
      { name: "Paymo" },
      { name: "Avaza" },
      { name: "Nifty" },
      { name: "Hive" },
      { name: "MeisterTask", logo: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/meistertask.svg" },
      { name: "Ganttic" },
      { name: "Teamhood" },
      { name: "LiquidPlanner" },
      { name: "Flow" },
      { name: "TeamGantt" },
      { name: "Bitrix24", logo: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/bitrix24.svg" },
      { name: "Plaky" },
      { name: "Ninety" },
      { name: "Lark", logo: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/lark.svg" },
      { name: "DeskTrack" },
      { name: "Zoho Projects", logo: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/zohoprojects.svg" },
      { name: "Kanban Tool" },
      { name: "Redbooth" },
      { name: "Scoro" },
      { name: "ClickTime" },
      { name: "Easy Projects" },
      { name: "OpenProject", logo: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/openproject.svg" },
      { name: "Quire" },
    ],
  },
  {
    name: "HR & Recruiting",
    platforms: [
      { name: "BambooHR", logo: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/bamboohr.svg" },
      { name: "Gusto", logo: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/gusto.svg" },
      { name: "Workday", logo: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/workday.svg" },
      { name: "ADP", logo: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/adp.svg" },
      { name: "Lever", logo: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/lever.svg" },
      { name: "Greenhouse", logo: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/greenhouse.svg" },
      { name: "Workable", logo: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/workable.svg" },
      { name: "Rippling", logo: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/rippling.svg" },
      { name: "Paylocity", logo: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/paylocity.svg" },
      { name: "JazzHR", logo: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/jazzhr.svg" },
      { name: "Personio", logo: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/personio.svg" },
      { name: "Zenefits", logo: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/zenefits.svg" },
      { name: "Breezy HR", logo: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/breezyhr.svg" },
      { name: "TriNet", logo: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/trinet.svg" },
      { name: "Paycor", logo: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/paycor.svg" },
      { name: "Namely", logo: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/namely.svg" },
      { name: "Deel", logo: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/deel.svg" },
      { name: "Connecteam" },
      { name: "Factorial" },
      { name: "15Five", logo: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/15five.svg" },
      { name: "Culture Amp", logo: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/cultureamp.svg" },
      { name: "Bob" },
      { name: "Freshteam", logo: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/freshteam.svg" },
      { name: "Lattice", logo: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/lattice.svg" },
      { name: "Mindbody Business" },
      { name: "HiBob" },
      { name: "GoCo" },
      { name: "Sage HR", logo: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/sage.svg" }, // Using generic Sage
      { name: "CharlieHR" },
      { name: "Zoho People", logo: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/zoho.svg" }, // Using generic Zoho
      { name: "HROne" },
      { name: "EmployWise" },
      { name: "Keka" },
      { name: "PeopleForce" },
      { name: "Lanteria" },
      { name: "HRMantra" },
      { name: "IceHrm" },
      { name: "HRPartner" },
      { name: "OrangeHRM" },
      { name: "Humi" },
    ],
  },
  {
    name: "CRM & Sales",
    platforms: [
      { name: "Salesforce", logo: "/logos/salesforce.png" },
      { name: "HubSpot", logo: "/logos/hubspot.png" },
      { name: "Zoho CRM", logo: "/logos/zoho-crm.png" },
      { name: "Pipedrive", logo: "/logos/pipedrive.png" },
      { name: "Freshsales", logo: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/freshsales.svg" },
      { name: "Copper", logo: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/copper.svg" },
      { name: "Insightly", logo: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/insightly.svg" },
      { name: "Close", logo: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/close.svg" },
      { name: "Keap", logo: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/keap.svg" },
      { name: "Nimble", logo: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/nimble.svg" },
      { name: "Agile CRM", logo: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/agilecrm.svg" },
      { name: "Capsule", logo: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/capsule.svg" },
      { name: "Streak", logo: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/streak.svg" },
      { name: "Less Annoying CRM", logo: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/lessannoyingcrm.svg" },
      { name: "Bigin by Zoho", logo: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/zohobigin.svg" },
      { name: "Monday Sales CRM", logo: "/logos/monday-com.png" }, // Using Monday.com logo
      { name: "Vtiger", logo: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/vtiger.svg" },
      { name: "Bitrix24", logo: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/bitrix24.svg" },
      { name: "SugarCRM", logo: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/sugarcrm.svg" },
      { name: "Pipeline CRM" },
      { name: "SalesMate" },
      { name: "EngageBay", logo: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/engagebay.svg" },
      { name: "Folk" },
      { name: "Attio" },
      { name: "Apptivo" },
      { name: "Thryv" },
      { name: "Act!" },
      { name: "Pega CRM" },
      { name: "NetHunt CRM" },
      { name: "LeadSquared" },
      { name: "Freshdesk", logo: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/freshdesk.svg" },
      { name: "Really Simple Systems" },
      { name: "Nutshell" },
      { name: "EspoCRM" },
      { name: "vCita" },
      { name: "OnePageCRM" },
      { name: "Flowlu" },
    ],
  },
  {
    name: "Accounting & Finance",
    platforms: [
      { name: "QuickBooks", logo: "/logos/quickbooks.png" },
      { name: "Xero", logo: "/logos/xero.png" },
      { name: "FreshBooks", logo: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/freshbooks.svg" },
      { name: "Wave", logo: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/wave.svg" },
      { name: "Sage", logo: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/sage.svg" },
      { name: "Bench", logo: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/bench.svg" },
      { name: "Zoho Books", logo: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/zohobooks.svg" },
      { name: "NetSuite", logo: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/netsuite.svg" },
      { name: "Expensify", logo: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/expensify.svg" },
      { name: "Bill.com", logo: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/billcom.svg" },
      { name: "Plooto" },
      { name: "Melio" },
      { name: "Pilot" },
      { name: "Kashoo" },
      { name: "ZipBooks" },
      { name: "Akaunting", logo: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/akaunting.svg" },
      { name: "GnuCash", logo: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/gnucash.svg" },
      { name: "Manager.io" },
      { name: "Harvest", logo: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/harvest.svg" },
      { name: "Float" },
      { name: "QuickFile" },
      { name: "ClearBooks" },
      { name: "FreeAccountingSoftware" },
      { name: "Bookipi" },
      { name: "ContaSim" },
      { name: "InvoiceNinja", logo: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/invoiceninja.svg" },
      { name: "SlickPie" },
      { name: "Debitoor" },
      { name: "Brightbook" },
      { name: "Zoho Invoice", logo: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/zohoinvoice.svg" },
      { name: "Sage Business Cloud Accounting", logo: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/sage.svg" },
      { name: "Odoo Accounting", logo: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/odoo.svg" },
      { name: "TallyPrime" },
      { name: "AlignBooks" },
      { name: "ProfitBooks" },
      { name: "Sunrise" },
      { name: "WaveApps", logo: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/wave.svg" },
      { name: "Zoho Expense", logo: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/zohoexpense.svg" },
      { name: "Fyle" },
      { name: "EasyBooks" },
    ],
  },
  {
    name: "Email & Communication",
    platforms: [
      { name: "Google Workspace (Gmail, Meet, Chat, Calendar, Drive, Docs, Sheets, Slides, Keep, Contacts)", logo: "/logos/gmail.png" },
      { name: "Microsoft 365 (Outlook, Teams, OneDrive, OneNote, Word, Excel, PowerPoint, Publisher, SharePoint)", logo: "/logos/outlook.png" },
      { name: "Slack", logo: "/logos/slack.png" },
      { name: "Zoom", logo: "/logos/zoom.png" },
      { name: "Zoho Mail", logo: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/zohomail.svg" },
      { name: "ProtonMail", logo: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/protonmail.svg" },
      { name: "Front", logo: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/front.svg" },
      { name: "Discord", logo: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/discord.svg" },
      { name: "Twist", logo: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/twist.svg" },
      { name: "Flock", logo: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/flock.svg" },
      { name: "Rocket.Chat", logo: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/rocketdotchat.svg" },
      { name: "Mattermost", logo: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/mattermost.svg" },
      { name: "Chanty" },
      { name: "Spike" },
      { name: "Superhuman" },
      { name: "Hey", logo: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/hey.svg" },
      { name: "Sendinblue", logo: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/sendinblue.svg" },
      { name: "Mailchimp", logo: "/logos/mailchimp.png" },
      { name: "Constant Contact", logo: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/constantcontact.svg" },
      { name: "Brevo", logo: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/brevo.svg" },
      { name: "GetResponse", logo: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/getresponse.svg" },
      { name: "ActiveCampaign", logo: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/activecampaign.svg" },
      { name: "AWeber", logo: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/aweber.svg" },
      { name: "MailerLite", logo: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/mailerlite.svg" },
      { name: "ConvertKit", logo: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/convertkit.svg" },
      { name: "Moosend", logo: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/moosend.svg" },
      { name: "Omnisend", logo: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/omnisend.svg" },
      { name: "Postmark", logo: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/postmark.svg" },
      { name: "SendGrid", logo: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/sendgrid.svg" },
      { name: "Amazon SES", logo: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/amazonses.svg" },
      { name: "Mailgun", logo: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/mailgun.svg" },
      { name: "Benchmark Email", logo: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/benchmarkemail.svg" },
      { name: "Elastic Email", logo: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/elasticemail.svg" },
      { name: "Pepipost" },
      { name: "Sendy" },
    ],
  },
  {
    name: "Website Building & Hosting",
    platforms: [
      { name: "Wix", logo: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/wix.svg" },
      { name: "Squarespace", logo: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/squarespace.svg" },
      { name: "Shopify", logo: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/shopify.svg" },
      { name: "Webflow", logo: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/webflow.svg" },
      { name: "Hostinger", logo: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/hostinger.svg" },
      { name: "SiteGround", logo: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/siteground.svg" },
      { name: "Bluehost", logo: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/bluehost.svg" },
      { name: "Weebly", logo: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/weebly.svg" },
      { name: "Carrd", logo: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/carrd.svg" },
      { name: "Bubble", logo: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/bubble.svg" },
      { name: "Framer", logo: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/framer.svg" },
      { name: "Tilda", logo: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/tilda.svg" },
      { name: "Jimdo", logo: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/jimdo.svg" },
      { name: "Strikingly", logo: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/strikingly.svg" },
      { name: "Ucraft", logo: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/ucraft.svg" },
      { name: "Duda", logo: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/duda.svg" },
      { name: "Webnode", logo: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/webnode.svg" },
      { name: "Zyro", logo: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/zyro.svg" },
      { name: "GoDaddy", logo: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/godaddy.svg" },
      { name: "DreamHost", logo: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/dreamhost.svg" },
      { name: "WP Engine", logo: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/wpengine.svg" },
      { name: "InMotion Hosting", logo: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/inmotionhosting.svg" },
      { name: "A2 Hosting", logo: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/a2hosting.svg" },
      { name: "Namecheap", logo: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/namecheap.svg" },
      { name: "Ionos", logo: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/ionos.svg" },
      { name: "FastComet", logo: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/fastcomet.svg" },
      { name: "GreenGeeks", logo: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/greengeeks.svg" },
      { name: "HostGator", logo: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/hostgator.svg" },
      { name: "Web.com", logo: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/webcom.svg" },
      { name: "BigCommerce", logo: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/bigcommerce.svg" },
      { name: "Squarespace Commerce", logo: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/squarespace.svg" },
      { name: "Volusion" },
      { name: "Shift4Shop" },
      { name: "Ecwid", logo: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/ecwid.svg" },
      { name: "BigScoots" },
      { name: "Cloudways", logo: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/cloudways.svg" },
      { name: "Kinsta", logo: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/kinsta.svg" },
      { name: "Site123", logo: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/site123.svg" },
      { name: "Zoho Sites", logo: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/zohosites.svg" },
      { name: "Seobility" },
      { name: "Webstarts" },
    ],
  },
  {
    name: "Social Media Platforms",
    platforms: [
      { name: "Instagram", logo: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/instagram.svg" },
      { name: "Facebook", logo: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/facebook.svg" },
      { name: "X", logo: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/x.svg" },
      { name: "LinkedIn", logo: "/logos/linkedin.png" },
      { name: "TikTok", logo: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/tiktok.svg" },
      { name: "YouTube", logo: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/youtube.svg" },
      { name: "Pinterest", logo: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/pinterest.svg" },
      { name: "Snapchat", logo: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/snapchat.svg" },
      { name: "Reddit", logo: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/reddit.svg" },
      { name: "Twitter", logo: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/twitter.svg" },
      { name: "Threads", logo: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/threads.svg" },
      { name: "WhatsApp Business", logo: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/whatsapp.svg" },
      { name: "Telegram", logo: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/telegram.svg" },
      { name: "Discord", logo: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/discord.svg" },
      { name: "Vimeo", logo: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/vimeo.svg" },
      { name: "Twitch", logo: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/twitch.svg" },
      { name: "Patreon", logo: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/patreon.svg" },
      { name: "Clubhouse", logo: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/clubhouse.svg" },
      { name: "Quora", logo: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/quora.svg" },
      { name: "Medium", logo: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/medium.svg" },
    ],
  },
  {
    name: "E-Signature",
    platforms: [
      { name: "Adobe Acrobat Sign", logo: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/adobeacrobatsign.svg" },
      { name: "DocuSign", logo: "/logos/docusign.png" },
      { name: "SignNow", logo: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/signnow.svg" },
      { name: "PandaDoc", logo: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/pandadoc.svg" },
      { name: "HelloSign (Dropbox Sign)", logo: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/hellosign.svg" },
      { name: "RightSignature", logo: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/rightsignature.svg" },
      { name: "SignRequest", logo: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/signrequest.svg" },
      { name: "eSignatures.io" },
      { name: "Signeasy", logo: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/signeasy.svg" },
      { name: "Foxit eSign", logo: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/foxit.svg" }, // Using generic Foxit
      { name: "GetAccept" },
      { name: "OneSpan Sign", logo: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/onespansign.svg" },
      { name: "airSlate SignNow", logo: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/airslate.svg" }, // Using generic airSlate
      { name: "Docupilot" },
      { name: "Jotform Sign", logo: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/jotform.svg" }, // Using generic Jotform
      { name: "Xodo Sign" },
      { name: "Signaturely" },
      { name: "Scrive" },
      { name: "eMudhra emSigner" },
      { name: "Eversign" },
    ],
  },
  {
    name: "Security",
    platforms: [
      { name: "Bitwarden", logo: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/bitwarden.svg" },
      { name: "LastPass", logo: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/lastpass.svg" },
      { name: "1Password", logo: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/1password.svg" },
      { name: "NordPass", logo: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/nordpass.svg" },
      { name: "Dashlane", logo: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/dashlane.svg" },
      { name: "Keeper", logo: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/keepersecurity.svg" },
      { name: "RoboForm", logo: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/roboform.svg" },
      { name: "Enpass", logo: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/enpass.svg" },
      { name: "Zoho Vault", logo: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/zohovault.svg" },
      { name: "Passbolt", logo: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/passbolt.svg" },
      { name: "Auth0", logo: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/auth0.svg" },
      { name: "Okta", logo: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/okta.svg" },
      { name: "Duo Security", logo: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/duosecurity.svg" },
      { name: "Norton Password Manager", logo: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/norton.svg" }, // Using generic Norton
      { name: "LogMeIn" },
      { name: "CyberArk" },
      { name: "Secret Server" },
      { name: "SecureSafe" },
      { name: "Myki" },
      { name: "Password Boss" },
    ],
  },
  {
    name: "ERP & Business Management",
    platforms: [
      { name: "ERPNext", logo: "/logos/erp.svg" },
      { name: "Odoo", logo: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/odoo.svg" },
      { name: "NetSuite", logo: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/netsuite.svg" },
      { name: "SAP Business One", logo: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/sap.svg" }, // Using generic SAP
      { name: "Syspro" },
      { name: "Epicor" },
      { name: "Infor CloudSuite" },
      { name: "Zoho One", logo: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/zoho.svg" }, // Using generic Zoho
      { name: "Sage X3", logo: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/sage.svg" }, // Using generic Sage
      { name: "Microsoft Dynamics 365", logo: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/microsoftdynamics365.svg" },
      { name: "Oracle Fusion Cloud ERP", logo: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/oracle.svg" }, // Using generic Oracle
      { name: "IFS (Industrial and Financial Systems)" },
      { name: "Deskera ERP" },
      { name: "Priority Software" },
      { name: "Acumatica Cloud ERP", logo: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/acumatica.svg" },
      { name: "Katana MRP" },
      { name: "MRPeasy" },
      { name: "BlueCherry ERP" },
      { name: "Sage Intacct", logo: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/sageintacct.svg" },
      { name: "Brightpearl" },
    ],
  },
  {
    name: "Analytics & SEO",
    platforms: [
      { name: "Google Analytics", logo: "/logos/google-analytics.png" },
      { name: "Mixpanel", logo: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/mixpanel.svg" },
      { name: "Amplitude", logo: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/amplitude.svg" },
      { name: "Hotjar", logo: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/hotjar.svg" },
      { name: "SEMrush", logo: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/semrush.svg" },
      { name: "Ahrefs", logo: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/ahrefs.svg" },
      { name: "Moz", logo: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/moz.svg" },
      { name: "SimilarWeb", logo: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/similarweb.svg" },
      { name: "Crazy Egg", logo: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/crazyegg.svg" },
      { name: "Optimizely", logo: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/optimizely.svg" },
      { name: "Heap", logo: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/heap.svg" },
      { name: "Matomo", logo: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/matomo.svg" },
      { name: "Fathom", logo: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/fathom.svg" },
      { name: "Plausible", logo: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/plausibleanalytics.svg" },
      { name: "SEOquake", logo: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/seoquake.svg" },
      { name: "RankMath", logo: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/rankmath.svg" },
      { name: "Yoast", logo: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/yoast.svg" },
      { name: "Screaming Frog", logo: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/screamingfrog.svg" },
      { name: "Google Search Console", logo: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/googlesearchconsole.svg" },
      { name: "Seobility", logo: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/seobility.svg" },
    ],
  },
];

const Platforms = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow container py-16 md:py-24">
        <section className="text-center mb-16 animate-fade-in-up">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
            Platforms We Master
          </h1>
          <p className="text-lg text-gray-700 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed delay-200">
            Our expertise spans a vast array of industry-leading and niche platforms. If you don't see your preferred tool, just ask!
          </p>
        </section>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {platformCategories.map((category, catIndex) => (
            <div
              key={catIndex}
              className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 animate-fade-in-up"
              style={{ animationDelay: `${0.3 + catIndex * 0.1}s` }}
            >
              <h2 className="text-2xl font-bold text-primary dark:text-calpir-green-400 mb-6 border-b pb-4 border-gray-200 dark:border-gray-700">
                {category.name}
              </h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {category.platforms.map((platform, pIndex) => (
                  <div
                    key={pIndex}
                    className="flex flex-col items-center text-center p-3 rounded-lg bg-gray-50 dark:bg-gray-900 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200 transform hover:scale-105"
                  >
                    {platform.logo ? (
                      platform.logo.startsWith("http") ? (
                        <div
                          className="h-8 w-8 mb-2"
                          style={{
                            background: "currentColor", // This will make the SVG use the text color
                            WebkitMask: `url(${platform.logo}) no-repeat center`,
                            mask: `url(${platform.logo}) no-repeat center`,
                            WebkitMaskSize: 'contain',
                            maskSize: 'contain',
                            color: 'var(--foreground)' // Default color for simple-icons
                          }}
                        ></div>
                      ) : (
                        <img src={platform.logo} alt={platform.name} className="h-8 w-8 mb-2 object-contain" />
                      )
                    ) : (
                      <div className="h-8 w-8 mb-2 flex items-center justify-center text-gray-500 dark:text-gray-400">
                        <Puzzle className="h-6 w-6" /> {/* Placeholder icon */}
                      </div>
                    )}
                    <span className="text-sm font-medium text-gray-800 dark:text-gray-200 leading-tight">
                      {platform.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <section className="mt-20 text-center p-8 rounded-2xl shadow-xl animate-fade-in-up delay-1500
                    bg-gradient-to-br from-palette-blue-50 to-calpir-green-50 dark:from-palette-blue-950 dark:to-calpir-green-950 max-w-4xl mx-auto">
          <Puzzle className="h-16 w-16 mx-auto mb-6 text-primary dark:text-calpir-green-300 animate-bounce-slow" />
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
            Don't See Your Platform Listed?
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto mb-8">
            Our expertise isn't limited to this list. If you have a specific platform or unique setup in mind, we can create a custom solution tailored just for you.
          </p>
          <Link to="/get-a-quote">
            <Button
              size="lg"
              className="bg-primary hover:bg-calpir-green-700 text-white hover:text-white text-lg px-8 py-3 rounded-2xl shadow-lg transition-all duration-300 ease-in-out transform hover:scale-110 hover:animate-button-glow"
            >
              Request a Custom Set Up
            </Button>
          </Link>
        </section>
      </main>
      <Footer />
      <MadeWithDyad />
    </div>
  );
};

export default Platforms;