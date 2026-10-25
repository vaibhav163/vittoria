# EmailJS Setup — Step by Step

The website form (Home + Contact page) sends an email through EmailJS.
Right now it shows "Form not yet connected" because the 3 credentials in
`src/config.js` are placeholders. Do the steps below once and the form
starts working on both pages. Total time: about 10 minutes.
Free plan gives 200 emails/month, which is enough for this site.

You need 3 values from the EmailJS website:

| Value | Where you get it on emailjs.com |
|---|---|
| Public Key | Account → API Keys (older dashboard: Account → General) |
| Service ID | Email Services → your service (looks like `service_xxxxxxx`) |
| Template ID | Email Templates → your template (looks like `template_xxxxxxx`) |

---

## PART A — What to fill on the EmailJS website

1. Go to https://www.emailjs.com → **Sign Up** (free). Create the account
   with the client's email if possible, so the client owns it.

2. Left menu → **Email Services** → **Add New Service** → choose **Gmail**.

3. Click **Connect Account** and sign in with the Gmail/Workspace account
   that will SEND the enquiry emails (can be the client's own mailbox).
   Then click **Create Service**.

4. On the services list, copy the **Service ID** (e.g. `service_abc1234`).
   Keep it aside for Part B.

5. Left menu → **Email Templates** → **Create New Template**.
   Fill the fields exactly like this:

   **To Email:** `vittoria@vittoriaaviation.com` (the primary email —
   enquiries land here)

   **CC:** `baljinder@vittoriaaviation.com` (alternate email — add it in
   the template's CC field, in the template Settings, if both mailboxes
   should receive every enquiry)

   **From Name:** `Vittoria Aviation Website`

   **From Email:** tick **Use Default Email Address**

   **Reply To:** `{{reply_to}}`
   (so when the client presses Reply, the answer goes to the visitor)

   **Subject:** `New RFP — {{service_interest}} from {{from_name}}`

   **Content:** delete everything and paste this:

   ```
   New enquiry from the Vittoria Aviation website

   Name: {{from_name}}
   Organisation: {{organization}}
   Email: {{reply_to}}
   Phone: {{phone}}
   Country: {{country}}
   Consent to contact: {{consent}}
   Service Interest: {{service_interest}}

   Message:
   {{message}}
   ```

   These `{{...}}` names are fixed — they must match the form fields
   exactly, otherwise that detail will come blank in the email:
   `from_name`, `organization`, `country`, `reply_to`, `phone`, `consent`,
   `service_interest`, `message`.

6. Click **Save**. On the templates list, copy the **Template ID**
   (e.g. `template_xyz9876`). Keep it aside for Part B.

7. Left menu → **Account** → **API Keys** (or Account → General).
   Copy the **Public Key**. Keep it aside for Part B.

   Optional but recommended: Account → Security → add the site domain
   (vittoriaaviation.com) as an allowed domain, so nobody else can use
   these keys on another website.

## PART B — What to fill in the code

8. Open **`src/config.js`** — this is the ONLY file you have to edit.
   Replace the 3 placeholder lines with your copied values:

   ```js
   export const EMAILJS_PUBLIC_KEY = "paste Public Key here";
   export const EMAILJS_SERVICE_ID = "paste Service ID here";   // service_xxxxxxx
   export const EMAILJS_TEMPLATE_ID = "paste Template ID here"; // template_xxxxxxx
   ```

   Do not change anything else. Both forms (Home footer form and Contact
   page form) use this one file automatically.

9. Run the site (`npm run dev`), open the Contact page, fill the form
   with your own details and submit. You should see
   "Thanks — we'll be in touch shortly." and the email should arrive at
   the To Email address from Step 5 within a minute.

## If it does not work

- Still shows "Form not yet connected" → a value in `src/config.js` is
  still a placeholder, or the file was not saved.
- Email does not arrive → check spam folder; check the Template ID and
  Service ID are copied fully with no spaces; in EmailJS dashboard open
  **Email History** (left menu → History/Logs) — it shows whether EmailJS
  received the request and what error Gmail gave.
- A detail is blank in the email → the `{{variable}}` spelling in the
  template does not match the list in Step 5.
