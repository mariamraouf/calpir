"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { MadeWithDyad } from "@/components/made-with-dyad";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Puzzle } from "lucide-react";
import PageHeader from "@/components/PageHeader"; // Import PageHeader

interface Platform {
  name: string;
  logo?: string; // URL for clearbit.com
}

interface PlatformCategory {
  name: string;
  platforms: Platform[];
}

const initialPlatformCategories: PlatformCategory[] = [
  {
    name: "Project Management",
    platforms: [
      { name: "Asana", logo: "https://logo.clearbit.com/asana.com?size=50" },
      { name: "Monday.com", logo: "https://logo.clearbit.com/monday.com?size=50" },
      { name: "Trello", logo: "https://logo.clearbit.com/trello.com?size=50" },
      { name: "Jira", logo: "https://logo.clearbit.com/atlassian.com?size=50" },
      { name: "ClickUp", logo: "/logos/clickup-logo.jpeg" }, // Updated to local JPEG
      { name: "Basecamp", logo: "https://logo.clearbit.com/basecamp.com?size=50" },
      { name: "Wrike", logo: "https://logo.clearbit.com/wrike.com?size=50" },
      { name: "Notion", logo: "https://logo.clearbit.com/notion.so?size=50" },
      { name: "Microsoft Planner", logo: "https://logo.clearbit.com/microsoft.com?size=50" },
      { name: "Smartsheet", logo: "https://logo.clearbit.com/smartsheet.com?size=50" },
      { name: "Teamwork", logo: "https://logo.clearbit.com/teamwork.com?size=50" },
      { name: "Airtable", logo: "https://logo.clearbit.com/airtable.com?size=50" },
      { name: "Todoist", logo: "https://logo.clearbit.com/todoist.com?size=50" },
      { name: "Zenkit", logo: "https://logo.clearbit.com/zenkit.com?size=50" },
      { name: "Workiom", logo: "https://logo.clearbit.com/workiom.com?size=50" },
      { name: "Taiga", logo: "https://logo.clearbit.com/taiga.io?size=50" },
      { name: "Freedcamp", logo: "https://logo.clearbit.com/freedcamp.com?size=50" },
      { name: "Paymo", logo: "https://logo.clearbit.com/paymoapp.com?size=50" },
      { name: "Avaza", logo: "https://logo.clearbit.com/avaza.com?size=50" },
      { name: "Nifty", logo: "/logos/nifty-logo.svg" }, // Still local SVG
      { name: "Hive", logo: "https://logo.clearbit.com/hive.com?size=50" },
      { name: "MeisterTask", logo: "https://logo.clearbit.com/meistertask.com?size=50" },
      { name: "Ganttic", logo: "https://logo.clearbit.com/ganttic.com?size=50" },
      { name: "Teamhood", logo: "https://logo.clearbit.com/teamhood.com?size=50" },
      { name: "LiquidPlanner", logo: "https://logo.clearbit.com/liquidplanner.com?size=50" },
      { name: "Flow", logo: "https://logo.clearbit.com/getflow.com?size=50" },
      { name: "TeamGantt", logo: "https://logo.clearbit.com/teamgantt.com?size=50" },
      { name: "Bitrix24", logo: "https://logo.clearbit.com/bitrix24.com?size=50" },
      { name: "Plaky", logo: "https://logo.clearbit.com/plaky.com?size=50" },
      { name: "Ninety", logo: "https://logo.clearbit.com/ninety.io?size=50" },
      { name: "Lark", logo: "https://logo.clearbit.com/larksuite.com?size=50" },
      { name: "Zoho Projects", logo: "https://logo.clearbit.com/zoho.com?size=50" },
      { name: "Kanban Tool", logo: "https://logo.clearbit.com/kanbantool.com?size=50" },
      { name: "Redbooth", logo: "https://logo.clearbit.com/redbooth.com?size=50" },
      { name: "Scoro", logo: "https://logo.clearbit.com/scoro.com?size=50" },
      { name: "ClickTime", logo: "https://logo.clearbit.com/clicktime.com?size=50" },
      { name: "Easy Projects", logo: "https://logo.clearbit.com/easyprojects.com?size=50" },
      { name: "OpenProject", logo: "https://logo.clearbit.com/openproject.org?size=50" },
      { name: "Quire", logo: "https://logo.clearbit.com/quire.io?size=50" },
    ],
  },
  {
    name: "HR & Recruiting",
    platforms: [
      { name: "BambooHR", logo: "https://logo.clearbit.com/bamboohr.com?size=50" },
      { name: "Gusto", logo: "https://logo.clearbit.com/gusto.com?size=50" },
      { name: "Workday", logo: "https://logo.clearbit.com/workday.com?size=50" },
      { name: "ADP", logo: "https://logo.clearbit.com/adp.com?size=50" },
      { name: "Lever", logo: "https://logo.clearbit.com/lever.co?size=50" },
      { name: "Greenhouse", logo: "https://logo.clearbit.com/greenhouse.io?size=50" },
      { name: "Workable", logo: "https://logo.clearbit.com/workable.com?size=50" },
      { name: "Rippling", logo: "https://logo.clearbit.com/rippling.com?size=50" },
      { name: "Paylocity", logo: "https://logo.clearbit.com/paylocity.com?size=50" },
      { name: "JazzHR", logo: "https://logo.clearbit.com/jazzhr.com?size=50" },
      { name: "Personio", logo: "https://logo.clearbit.com/personio.com?size=50" },
      { name: "Zenefits", logo: "https://logo.clearbit.com/zenefits.com?size=50" },
      { name: "Breezy HR", logo: "https://logo.clearbit.com/breezy.hr?size=50" },
      { name: "TriNet", logo: "https://logo.clearbit.com/trinet.com?size=50" },
      { name: "Paycor", logo: "https://logo.clearbit.com/paycor.com?size=50" },
      { name: "Namely", logo: "https://logo.clearbit.com/namely.com?size=50" },
      { name: "Deel", logo: "https://logo.clearbit.com/deel.com?size=50" },
      { name: "Connecteam", logo: "https://logo.clearbit.com/connecteam.com?size=50" },
      { name: "Factorial", logo: "https://logo.clearbit.com/factorialhr.com?size=50" },
      { name: "15Five", logo: "https://logo.clearbit.com/15five.com?size=50" },
      { name: "Culture Amp", logo: "https://logo.clearbit.com/cultureamp.com?size=50" },
      { name: "Freshteam", logo: "/logos/freshteam-logo.svg" }, // Still local SVG
      { name: "Lattice", logo: "https://logo.clearbit.com/lattice.com?size=50" },
      { name: "Mindbody Business", logo: "https://logo.clearbit.com/mindbodyonline.com?size=50" },
      { name: "GoCo", logo: "https://logo.clearbit.com/goco.io?size=50" },
      { name: "Sage HR", logo: "https://logo.clearbit.com/sage.com?size=50" },
      { name: "CharlieHR", logo: "https://logo.clearbit.com/charliehr.com?size=50" },
      { name: "Zoho People", logo: "https://logo.clearbit.com/zoho.com?size=50" },
      { name: "HROne", logo: "https://logo.clearbit.com/hrone.com?size=50" },
      { name: "EmployWise", logo: "https://logo.clearbit.com/employwise.com?size=50" },
      { name: "Keka", logo: "https://logo.clearbit.com/keka.com?size=50" },
      { name: "PeopleForce", logo: "https://logo.clearbit.com/peopleforce.io?size=50" },
      { name: "Lanteria", logo: "https://logo.clearbit.com/lanteria.com?size=50" },
      { name: "HRMantra", logo: "https://logo.clearbit.com/hrmantra.com?size=50" },
      { name: "IceHrm", logo: "https://logo.clearbit.com/icehrm.com?size=50" },
      { name: "HRPartner", logo: "https://logo.clearbit.com/hrpartner.io?size=50" },
      { name: "OrangeHRM", logo: "https://logo.clearbit.com/orangehrm.com?size=50" },
      { name: "Humi", logo: "https://logo.clearbit.com/humi.ca?size=50" },
    ],
  },
  {
    name: "CRM & Sales",
    platforms: [
      { name: "Salesforce", logo: "https://logo.clearbit.com/salesforce.com?size=50" },
      { name: "HubSpot", logo: "https://logo.clearbit.com/hubspot.com?size=50" },
      { name: "Zoho CRM", logo: "https://logo.clearbit.com/zohocrm.com?size=50" },
      { name: "Pipedrive", logo: "https://logo.clearbit.com/pipedrive.com?size=50" },
      { name: "Freshsales", logo: "https://logo.clearbit.com/freshworks.com?size=50" },
      { name: "Copper", logo: "https://logo.clearbit.com/copper.com?size=50" },
      { name: "Insightly", logo: "https://logo.clearbit.com/insightly.com?size=50" },
      { name: "Close", logo: "https://logo.clearbit.com/close.com?size=50" },
      { name: "Keap", logo: "https://logo.clearbit.com/keap.com?size=50" },
      { name: "Nimble", logo: "https://logo.clearbit.com/nimble.com?size=50" },
      { name: "Agile CRM", logo: "https://logo.clearbit.com/agilecrm.com?size=50" },
      { name: "Capsule", logo: "https://logo.clearbit.com/capsulecrm.com?size=50" },
      { name: "Streak", logo: "https://logo.clearbit.com/streak.com?size=50" },
      { name: "Less Annoying CRM", logo: "https://logo.clearbit.com/lessannoyingcrm.com?size=50" },
      { name: "Bigin by Zoho", logo: "https://logo.clearbit.com/zoho.com?size=50" },
      { name: "Monday Sales CRM", logo: "https://logo.clearbit.com/monday.com?size=50" },
      { name: "Vtiger", logo: "https://logo.clearbit.com/vtiger.com?size=50" },
      { name: "Bitrix24", logo: "https://logo.clearbit.com/bitrix24.com?size=50" },
      { name: "SugarCRM", logo: "https://logo.clearbit.com/sugarcrm.com?size=50" },
      { name: "Pipeline CRM", logo: "https://logo.clearbit.com/pipelinecrm.com?size=50" },
      { name: "SalesMate", logo: "https://logo.clearbit.com/salesmate.io?size=50" },
      { name: "EngageBay", logo: "https://logo.clearbit.com/engagebay.com?size=50" },
      { name: "Folk", logo: "https://logo.clearbit.com/folk.app?size=50" },
      { name: "Attio", logo: "https://logo.clearbit.com/attio.com?size=50" },
      { name: "Apptivo", logo: "https://logo.clearbit.com/apptivo.com?size=50" },
      { name: "Thryv", logo: "https://logo.clearbit.com/thryv.com?size=50" },
      { name: "Act!", logo: "https://logo.clearbit.com/act.com?size=50" },
      { name: "Pega CRM", logo: "https://logo.clearbit.com/pega.com?size=50" },
      { name: "NetHunt CRM", logo: "https://logo.clearbit.com/nethunt.com?size=50" },
      { name: "LeadSquared", logo: "https://logo.clearbit.com/leadsquared.com?size=50" },
      { name: "Freshdesk", logo: "https://logo.clearbit.com/freshworks.com?size=50" },
      { name: "Really Simple Systems", logo: "https://logo.clearbit.com/reallysimplesystems.com?size=50" },
      { name: "Nutshell", logo: "https://logo.clearbit.com/nutshell.com?size=50" },
      { name: "EspoCRM", logo: "https://logo.clearbit.com/espocrm.com?size=50" },
      { name: "vCita", logo: "https://logo.clearbit.com/vcita.com?size=50" },
      { name: "OnePageCRM", logo: "https://logo.clearbit.com/onepagecrm.com?size=50" },
      { name: "Flowlu", logo: "https://logo.clearbit.com/flowlu.com?size=50" },
    ],
  },
  {
    name: "Accounting & Finance",
    platforms: [
      { name: "QuickBooks", logo: "https://logo.clearbit.com/quickbooks.intuit.com?size=50" },
      { name: "Xero", logo: "https://logo.clearbit.com/xero.com?size=50" },
      { name: "FreshBooks", logo: "https://logo.clearbit.com/freshbooks.com?size=50" },
      { name: "Wave", logo: "https://logo.clearbit.com/waveapps.com?size=50" },
      { name: "Sage", logo: "https://logo.clearbit.com/sage.com?size=50" },
      { name: "Bench", logo: "https://logo.clearbit.com/bench.co?size=50" },
      { name: "Zoho Books", logo: "https://logo.clearbit.com/zoho.com?size=50" },
      { name: "NetSuite", logo: "https://logo.clearbit.com/netsuite.com?size=50" },
      { name: "Expensify", logo: "https://logo.clearbit.com/expensify.com?size=50" },
      { name: "Bill.com", logo: "https://logo.clearbit.com/bill.com?size=50" },
      { name: "Plooto", logo: "https://logo.clearbit.com/plooto.com?size=50" },
      { name: "Melio", logo: "https://logo.clearbit.com/meliopayments.com?size=50" },
      { name: "Pilot", logo: "https://logo.clearbit.com/pilot.com?size=50" },
      { name: "Kashoo", logo: "https://logo.clearbit.com/kashoo.com?size=50" },
      { name: "ZipBooks", logo: "https://logo.clearbit.com/zipbooks.com?size=50" },
      { name: "Akaunting", logo: "https://logo.clearbit.com/akaunting.com?size=50" },
      { name: "GnuCash", logo: "https://logo.clearbit.com/gnucash.org?size=50" },
      { name: "Manager.io", logo: "https://logo.clearbit.com/manager.io?size=50" },
      { name: "Float", logo: "https://logo.clearbit.com/floatapp.com?size=50" },
      { name: "QuickFile", logo: "https://logo.clearbit.com/quickfile.co.uk?size=50" },
      { name: "ClearBooks", logo: "https://logo.clearbit.com/clearbooks.co.uk?size=50" },
      { name: "Bookipi", logo: "https://logo.clearbit.com/bookipi.com?size=50" },
      { name: "ContaSim", logo: "https://logo.clearbit.com/contasimple.com?size=50" },
      { name: "InvoiceNinja", logo: "https://logo.clearbit.com/invoiceninja.com?size=50" },
      { name: "SlickPie", logo: "https://logo.clearbit.com/slickpie.com?size=50" },
      { name: "Debitoor", logo: "https://logo.clearbit.com/debitoor.com?size=50" },
      { name: "Brightbook", logo: "https://logo.clearbit.com/brightbook.com?size=50" },
      { name: "Zoho Invoice", logo: "https://logo.clearbit.com/zoho.com?size=50" },
      { name: "Sage Business Cloud Accounting", logo: "https://logo.clearbit.com/sage.com?size=50" },
      { name: "Odoo Accounting", logo: "https://logo.clearbit.com/odoo.com?size=50" },
      { name: "TallyPrime", logo: "https://logo.clearbit.com/tallysolutions.com?size=50" },
      { name: "AlignBooks", logo: "https://logo.clearbit.com/alignbooks.com?size=50" },
      { name: "ProfitBooks", logo: "https://logo.clearbit.com/profitbooks.net?size=50" },
      { name: "Sunrise", logo: "https://logo.clearbit.com/sunriseapp.com?size=50" },
      { name: "WaveApps", logo: "https://logo.clearbit.com/waveapps.com?size=50" },
      { name: "Zoho Expense", logo: "https://logo.clearbit.com/zoho.com?size=50" },
      { name: "Fyle", logo: "https://logo.clearbit.com/fylehq.com?size=50" },
      { name: "EasyBooks", logo: "https://logo.clearbit.com/easybooksapp.com?size=50" },
    ],
  },
  {
    name: "Email & Communication",
    platforms: [
      { name: "Google Workspace", logo: "https://logo.clearbit.com/workspace.google.com?size=50" },
      { name: "Microsoft 365", logo: "https://logo.clearbit.com/microsoft.com?size=50" },
      { name: "Slack", logo: "https://logo.clearbit.com/slack.com?size=50" },
      { name: "Zoom", logo: "https://logo.clearbit.com/zoom.us?size=50" },
      { name: "Zoho Mail", logo: "https://logo.clearbit.com/zoho.com?size=50" },
      { name: "ProtonMail", logo: "https://logo.clearbit.com/proton.me?size=50" },
      { name: "Front", logo: "https://logo.clearbit.com/frontapp.com?size=50" },
      { name: "Discord", logo: "https://logo.clearbit.com/discord.com?size=50" },
      { name: "Twist", logo: "https://logo.clearbit.com/twist.com?size=50" },
      { name: "Flock", logo: "https://logo.clearbit.com/flock.com?size=50" },
      { name: "Rocket.Chat", logo: "https://logo.clearbit.com/rocket.chat?size=50" },
      { name: "Mattermost", logo: "https://logo.clearbit.com/mattermost.com?size=50" },
      { name: "Chanty", logo: "https://logo.clearbit.com/chanty.com?size=50" },
      { name: "Spike", logo: "https://logo.clearbit.com/spikenow.com?size=50" },
      { name: "Superhuman", logo: "https://logo.clearbit.com/superhuman.com?size=50" },
      { name: "Hey", logo: "https://logo.clearbit.com/hey.com?size=50" },
      { name: "Brevo", logo: "/logos/brevo-logo.png" }, // Updated to local PNG
      { name: "Mailchimp", logo: "https://logo.clearbit.com/mailchimp.com?size=50" },
      { name: "Constant Contact", logo: "https://logo.clearbit.com/constantcontact.com?size=50" },
      { name: "GetResponse", logo: "https://logo.clearbit.com/getresponse.com?size=50" },
      { name: "ActiveCampaign", logo: "https://logo.clearbit.com/activecampaign.com?size=50" },
      { name: "AWeber", logo: "https://logo.clearbit.com/aweber.com?size=50" },
      { name: "MailerLite", logo: "https://logo.clearbit.com/mailerlite.com?size=50" },
      { name: "ConvertKit", logo: "https://logo.clearbit.com/convertkit.com?size=50" },
      { name: "Moosend", logo: "https://logo.clearbit.com/moosend.com?size=50" },
      { name: "Omnisend", logo: "https://logo.clearbit.com/omnisend.com?size=50" },
      { name: "Postmark", logo: "https://logo.clearbit.com/postmarkapp.com?size=50" },
      { name: "SendGrid", logo: "https://logo.clearbit.com/sendgrid.com?size=50" },
      { name: "Amazon SES", logo: "https://logo.clearbit.com/aws.amazon.com?size=50" },
      { name: "Mailgun", logo: "https://logo.clearbit.com/mailgun.com?size=50" },
      { name: "Benchmark Email", logo: "https://logo.clearbit.com/benchmarkemail.com?size=50" },
      { name: "Elastic Email", logo: "https://logo.clearbit.com/elasticemail.com?size=50" },
      { name: "Pepipost", logo: "https://logo.clearbit.com/pepipost.com?size=50" },
      { name: "Sendy", logo: "https://logo.clearbit.com/sendy.co?size=50" },
    ],
  },
  {
    name: "Social Media Platforms",
    platforms: [
      { name: "Instagram", logo: "https://logo.clearbit.com/instagram.com?size=50" },
      { name: "Facebook", logo: "https://logo.clearbit.com/facebook.com?size=50" },
      { name: "X", logo: "https://logo.clearbit.com/x.com?size=50" },
      { name: "LinkedIn", logo: "https://logo.clearbit.com/linkedin.com?size=50" },
      { name: "TikTok", logo: "https://logo.clearbit.com/tiktok.com?size=50" },
      { name: "YouTube", logo: "https://logo.clearbit.com/youtube.com?size=50" },
      { name: "Pinterest", logo: "https://logo.clearbit.com/pinterest.com?size=50" },
      { name: "Snapchat", logo: "https://logo.clearbit.com/snapchat.com?size=50" },
      { name: "Reddit", logo: "https://logo.clearbit.com/reddit.com?size=50" },
      { name: "Twitter", logo: "https://logo.clearbit.com/twitter.com?size=50" },
      { name: "Threads", logo: "https://logo.clearbit.com/threads.net?size=50" },
      { name: "WhatsApp Business", logo: "https://logo.clearbit.com/whatsapp.com?size=50" },
      { name: "Telegram", logo: "https://logo.clearbit.com/telegram.org?size=50" },
      { name: "Discord", logo: "https://logo.clearbit.com/discord.com?size=50" },
      { name: "Vimeo", logo: "https://logo.clearbit.com/vimeo.com?size=50" },
      { name: "Patreon", logo: "https://logo.clearbit.com/patreon.com?size=50" },
    ],
  },
  {
    name: "E-Signature",
    platforms: [
      { name: "Adobe Acrobat Sign", logo: "https://logo.clearbit.com/acrobat.adobe.com?size=50" },
      { name: "DocuSign", logo: "https://logo.clearbit.com/docusign.com?size=50" },
      { name: "SignNow", logo: "https://logo.clearbit.com/signnow.com?size=50" },
      { name: "PandaDoc", logo: "https://logo.clearbit.com/pandadoc.com?size=50" },
      { name: "HelloSign (Dropbox Sign)", logo: "https://logo.clearbit.com/hellosign.com?size=50" },
      { name: "RightSignature", logo: "https://logo.clearbit.com/rightsignature.com?size=50" },
      { name: "SignRequest", logo: "https://logo.clearbit.com/signrequest.com?size=50" },
      { name: "eSignatures.io", logo: "https://logo.clearbit.com/esignatures.io?size=50" },
      { name: "Signeasy", logo: "https://logo.clearbit.com/signeasy.com?size=50" },
      { name: "Foxit eSign", logo: "https://logo.clearbit.com/foxit.com?size=50" },
      { name: "GetAccept", logo: "https://logo.clearbit.com/getaccept.com?size=50" },
      { name: "OneSpan Sign", logo: "https://logo.clearbit.com/onespan.com?size=50" },
      { name: "airSlate SignNow", logo: "https://logo.clearbit.com/airslate.com?size=50" },
      { name: "Jotform Sign", logo: "https://logo.clearbit.com/jotform.com?size=50" },
      { name: "Xodo Sign", logo: "https://logo.clearbit.com/xodo.com?size=50" },
      { name: "Signaturely", logo: "https://logo.clearbit.com/signaturely.com?size=50" },
      { name: "Scrive", logo: "https://logo.clearbit.com/scrive.com?size=50" },
      { name: "eMudhra emSigner", logo: "https://logo.clearbit.com/emudhra.com?size=50" },
      { name: "Eversign", logo: "https://logo.clearbit.com/eversign.com?size=50" },
    ],
  },
  {
    name: "Security",
    platforms: [
      { name: "Bitwarden", logo: "https://logo.clearbit.com/bitwarden.com?size=50" },
      { name: "LastPass", logo: "https://logo.clearbit.com/lastpass.com?size=50" },
      { name: "1Password", logo: "https://logo.clearbit.com/1password.com?size=50" },
      { name: "NordPass", logo: "https://logo.clearbit.com/nordpass.com?size=50" },
      { name: "Dashlane", logo: "https://logo.clearbit.com/dashlane.com?size=50" },
      { name: "Keeper", logo: "https://logo.clearbit.com/keepersecurity.com?size=50" },
      { name: "RoboForm", logo: "https://logo.clearbit.com/roboform.com?size=50" },
      { name: "Enpass", logo: "https://logo.clearbit.com/enpass.io?size=50" },
      { name: "Zoho Vault", logo: "https://logo.clearbit.com/zoho.com?size=50" },
      { name: "Passbolt", logo: "https://logo.clearbit.com/passbolt.com?size=50" },
      { name: "Auth0", logo: "https://logo.clearbit.com/auth0.com?size=50" },
      { name: "Okta", logo: "https://logo.clearbit.com/okta.com?size=50" },
      { name: "Duo Security", logo: "https://logo.clearbit.com/duo.com?size=50" },
      { name: "Norton Password Manager", logo: "https://logo.clearbit.com/norton.com?size=50" },
      { name: "LogMeIn", logo: "https://logo.clearbit.com/logmein.com?size=50" },
      { name: "CyberArk", logo: "https://logo.clearbit.com/cyberark.com?size=50" },
      { name: "Secret Server", logo: "https://logo.clearbit.com/thycotic.com?size=50" },
      { name: "SecureSafe", logo: "https://logo.clearbit.com/securesafe.com?size=50" },
      { name: "Myki", logo: "https://logo.clearbit.com/myki.com?size=50" },
      { name: "Password Boss", logo: "https://logo.clearbit.com/passwordboss.com?size=50" },
    ],
  },
  {
    name: "ERP & Business Management",
    platforms: [
      { name: "ERPNext", logo: "https://logo.clearbit.com/erpnext.com?size=50" },
      { name: "Odoo", logo: "https://logo.clearbit.com/odoo.com?size=50" },
      { name: "NetSuite", logo: "https://logo.clearbit.com/netsuite.com?size=50" },
      { name: "SAP Business One", logo: "https://logo.clearbit.com/sap.com?size=50" },
      { name: "Syspro", logo: "https://logo.clearbit.com/syspro.com?size=50" },
      { name: "Epicor", logo: "https://logo.clearbit.com/epicor.com?size=50" },
      { name: "Infor CloudSuite", logo: "https://logo.clearbit.com/infor.com?size=50" },
      { name: "Zoho One", logo: "https://logo.clearbit.com/zoho.com?size=50" },
      { name: "Sage X3", logo: "https://logo.clearbit.com/sage.com?size=50" },
      { name: "Microsoft Dynamics 365", logo: "https://logo.clearbit.com/microsoft.com?size=50" },
      { name: "Oracle Fusion Cloud ERP", logo: "https://logo.clearbit.com/oracle.com?size=50" },
      { name: "IFS (Industrial and Financial Systems)", logo: "https://logo.clearbit.com/ifs.com?size=50" },
      { name: "Deskera ERP", logo: "https://logo.clearbit.com/deskera.com?size=50" },
      { name: "Priority Software", logo: "https://logo.clearbit.com/priority-software.com?size=50" },
      { name: "Acumatica Cloud ERP", logo: "https://logo.clearbit.com/acumatica.com?size=50" },
      { name: "Katana MRP", logo: "https://logo.clearbit.com/katanamrp.com?size=50" },
      { name: "MRPeasy", logo: "https://logo.clearbit.com/mrpeasy.com?size=50" },
      { name: "BlueCherry ERP", logo: "https://logo.clearbit.com/cgsinc.com?size=50" },
      { name: "Sage Intacct", logo: "https://logo.clearbit.com/intacct.com?size=50" },
      { name: "Brightpearl", logo: "https://logo.clearbit.com/brightpearl.com?size=50" },
    ],
  },
  {
    name: "Analytics & SEO",
    platforms: [
      { name: "Google Analytics", logo: "https://logo.clearbit.com/analytics.google.com?size=50" },
      { name: "Mixpanel", logo: "https://logo.clearbit.com/mixpanel.com?size=50" },
      { name: "Amplitude", logo: "https://logo.clearbit.com/amplitude.com?size=50" },
      { name: "Hotjar", logo: "https://logo.clearbit.com/hotjar.com?size=50" },
      { name: "SEMrush", logo: "https://logo.clearbit.com/semrush.com?size=50" },
      { name: "Ahrefs", logo: "https://logo.clearbit.com/ahrefs.com?size=50" },
      { name: "Moz", logo: "https://logo.clearbit.com/moz.com?size=50" },
      { name: "SimilarWeb", logo: "https://logo.clearbit.com/similarweb.com?size=50" },
      { name: "Crazy Egg", logo: "https://logo.clearbit.com/crazyegg.com?size=50" },
      { name: "Optimizely", logo: "https://logo.clearbit.com/optimizely.com?size=50" },
      { name: "Heap", logo: "https://logo.clearbit.com/heap.io?size=50" },
      { name: "Matomo", logo: "https://logo.clearbit.com/matomo.org?size=50" },
      { name: "Fathom", logo: "https://logo.clearbit.com/usefathom.com?size=50" },
      { name: "Plausible", logo: "https://logo.clearbit.com/plausible.io?size=50" },
      { name: "SEOquake", logo: "https://logo.clearbit.com/seoquake.com?size=50" },
      { name: "RankMath", logo: "https://logo.clearbit.com/rankmath.com?size=50" },
      { name: "Yoast", logo: "https://logo.clearbit.com/yoast.com?size=50" },
      { name: "Screaming Frog", logo: "https://logo.clearbit.com/screamingfrog.co.uk?size=50" },
      { name: "Seobility", logo: "https://logo.clearbit.com/seobility.net?size=50" },
    ],
  },
];

const platformsToRemove = [
  "DeskTrack",
  "FreeAccountingSoftware",
  "Quora",
  "Twitch",
  "Clubhouse",
  "Medium",
  "Google Search Console",
  "Docupilot",
];

const updatedPlatformCategories = initialPlatformCategories
  .filter(category => category.name !== "Website Building & Hosting") // Remove entire category
  .map(category => ({
    ...category,
    platforms: category.platforms.filter(platform => !platformsToRemove.includes(platform.name))
  }));

// Add the new "Time Tracking" category
updatedPlatformCategories.push({
  name: "Time Tracking",
  platforms: [
    { name: "Toggl", logo: "https://logo.clearbit.com/toggl.com?size=50" },
    { name: "Clockify", logo: "https://logo.clearbit.com/clockify.me?size=50" },
    { name: "Harvest", logo: "https://logo.clearbit.com/getharvest.com?size=50" },
    { name: "Time Doctor", logo: "https://logo.clearbit.com/timedoctor.com?size=50" },
    { name: "Teamlogger", logo: "https://logo.clearbit.com/teamlogger.com?size=50" },
    { name: "Tempo", logo: "https://logo.clearbit.com/tempo.io?size=50" },
    { name: "Hubstaff", logo: "https://logo.clearbit.com/hubstaff.com?size=50" },
    { name: "ClickUp Native Time Tracking", logo: "/logos/clickup-logo.jpeg" }, // Added ClickUp Native Time Tracking with new JPEG
  ],
});

// Add the new "AI and Automations" category
updatedPlatformCategories.push({
  name: "AI and Automations",
  platforms: [
    { name: "ChatGPT", logo: "https://logo.clearbit.com/openai.com?size=50" },
    { name: "Claude", logo: "https://logo.clearbit.com/anthropic.com?size=50" },
    { name: "Grok", logo: "https://logo.clearbit.com/x.ai?size=50" },
    { name: "Zapier", logo: "https://logo.clearbit.com/zapier.com?size=50" },
    { name: "Make.com", logo: "https://logo.clearbit.com/make.com?size=50" },
    { name: "ClickUp Brain", logo: "https://logo.clearbit.com/clickup.com?size=50" },
    { name: "Bard (Gemini)", logo: "https://logo.clearbit.com/gemini.google.com?size=50" },
    { name: "Microsoft Copilot", logo: "https://logo.clearbit.com/microsoft.com?size=50" },
    { name: "UiPath", logo: "https://logo.clearbit.com/uipath.com?size=50" },
    { name: "Automation Anywhere", logo: "https://logo.clearbit.com/automationanywhere.com?size=50" },
    { name: "Power Automate", logo: "https://logo.clearbit.com/microsoft.com?size=50" },
    { name: "Integrately", logo: "https://logo.clearbit.com/integrately.com?size=50" },
    { name: "ActiveCampaign Automation", logo: "https://logo.clearbit.com/activecampaign.com?size=50" },
    { name: "Zoho Flow", logo: "https://logo.clearbit.com/zoho.com?size=50" },
    { name: "IFTTT", logo: "https://logo.clearbit.com/ifttt.com?size=50" },
    { name: "Tray.io", logo: "https://logo.clearbit.com/tray.io?size=50" },
    { name: "Workato", logo: "https://logo.clearbit.com/workato.com?size=50" },
    { name: "Appian", logo: "https://logo.clearbit.com/appian.com?size=50" },
    { name: "Pega Systems", logo: "https://logo.clearbit.com/pega.com?size=50" },
    { name: "ServiceNow", logo: "https://logo.clearbit.com/servicenow.com?size=50" },
  ],
});

// Add a new "Design & Creative Tools" category
updatedPlatformCategories.push({
  name: "Design & Creative Tools",
  platforms: [
    { name: "Canva", logo: "/logos/canva-new.jpeg" }, // Updated to new local JPEG
    { name: "Figma", logo: "/logos/figma-new.jpeg" }, // Updated to new local JPEG
    { name: "Adobe Photoshop", logo: "/logos/adobe-photoshop-new.webp" }, // Updated to new local WEBP
    { name: "Adobe Illustrator", logo: "https://logo.clearbit.com/adobe.com?size=50" },
    { name: "Sketch", logo: "https://logo.clearbit.com/sketch.com?size=50" },
    { name: "InVision", logo: "https://logo.clearbit.com/invisionapp.com?size=50" },
    { name: "Miro", logo: "https://logo.clearbit.com/miro.com?size=50" },
    { name: "Whimsical", logo: "https://logo.clearbit.com/whimsical.com?size=50" },
    { name: "Procreate", logo: "https://logo.clearbit.com/procreate.art?size=50" },
    { name: "Affinity Designer", logo: "https://logo.clearbit.com/affinity.serif.com?size=50" },
    { name: "GIMP", logo: "https://logo.clearbit.com/gimp.org?size=50" },
    { name: "Inkscape", logo: "https://logo.clearbit.com/inkscape.org?size=50" },
  ],
});


const Platforms = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <PageHeader
          title="Platforms We Master"
          highlightWord="Master"
          description="Our expertise spans a vast array of industry-leading and niche platforms. If you don't see your preferred tool, just ask!"
          buttons={[
            { text: "Request a Custom Set Up", href: "/get-a-quote", variant: "primary" },
            { text: "Get a Free Consultation", href: "https://calendly.com/your-calpir-consultation", variant: "outline", isExternal: true },
          ]}
        />

        <section className="container py-16 md:py-24">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {updatedPlatformCategories.map((category, catIndex) => (
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
                        <img
                          src={platform.logo}
                          alt={platform.name}
                          title={platform.name}
                          className="h-8 w-8 mb-2 object-contain filter grayscale-0 opacity-100 hover:grayscale hover:opacity-60 transition-all duration-300"
                          onError={(e) => {
                            e.currentTarget.onerror = null; // Prevent infinite loop if placeholder also fails
                            e.currentTarget.src = 'https://via.placeholder.com/50?text=Logo';
                          }}
                        />
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
        </section>
      </main>
      <Footer />
      <MadeWithDyad />
    </div>
  );
};

export default Platforms;