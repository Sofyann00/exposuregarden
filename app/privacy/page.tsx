import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy - PT INOVASI SEMBILAN TANGAN',
  description: 'Privacy Policy for exposuregarden video and photo editing services and client data protection',
}

export default function PrivacyPage() {
  return (
    <main className="min-h-screen py-12 bg-background">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-card p-8 rounded-lg shadow">
          <h1 className="text-3xl font-bold text-foreground mb-4">
            Privacy Policy
          </h1>
          <p className="text-sm text-muted-foreground italic mb-8">
            Last Updated: {new Date().toLocaleDateString()}
          </p>

          <section className="space-y-8">
            <div>
              <h2 className="text-xl font-semibold text-foreground mb-3">
                1. Information We Collect
              </h2>
              <p className="text-muted-foreground">
                exposuregarden collects personal information including but not limited to: name, email address, phone number, business details, project requirements, raw media files, editing preferences, revision feedback, and payment information when you engage our editing services or create an account on our platform.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-foreground mb-3">
                2. How We Use Your Information
              </h2>
              <p className="text-muted-foreground">
                We use your information to:
              </p>
              <ul className="list-disc ml-6 mt-2 text-muted-foreground space-y-1">
                <li>Process your editing requests and provide customer support</li>
                <li>Send project updates and delivery notifications</li>
                <li>Understand your editing preferences and requirements</li>
                <li>Personalize your experience based on previous projects</li>
                <li>Maintain records of your projects and revisions</li>
                <li>Send promotional offers and service updates (with your consent)</li>
                <li>Improve our editing techniques and workflows</li>
                <li>Comply with legal obligations</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-foreground mb-3">
                3. Media File Security
              </h2>
              <p className="text-muted-foreground">
                We implement appropriate technical and organizational measures to protect your media files and personal data. All raw footage, images, and edited content are stored securely and handled with strict confidentiality. We maintain secure backup systems to prevent loss of your valuable content during the editing process.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-foreground mb-3">
                4. Data Retention
              </h2>
              <p className="text-muted-foreground">
                We retain your personal information and project files for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required by law. Upon request, we can delete your raw media files after project completion, though we recommend maintaining backups of all original content.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-foreground mb-3">
                5. Your Rights
              </h2>
              <p className="text-muted-foreground">
                Under Indonesian data protection laws, you have the right to:
              </p>
              <ul className="list-disc ml-6 mt-2 text-muted-foreground space-y-1">
                <li>Access your personal data and project information</li>
                <li>Correct inaccurate data</li>
                <li>Request deletion of your data and media files</li>
                <li>Object to processing of your data</li>
                <li>Withdraw consent for marketing communications</li>
                <li>Request a copy of your edited content</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-foreground mb-3">
                6. Cookies and Tracking
              </h2>
              <p className="text-muted-foreground">
                We use cookies and similar tracking technologies to enhance your experience on our platform, remember your preferences, maintain your login status, analyze site traffic, and provide personalized service recommendations based on your previous editing projects and browsing history.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-foreground mb-3">
                7. Contact Information
              </h2>
              <div className="text-muted-foreground">
                <p>For any questions about this Privacy Policy, your media files, or our data practices, please contact us at:</p>
                <div className="mt-2">
                  <p>PT INOVASI SEMBILAN TANGAN</p>
                  <p>Gedung Is Plaza Lt. 5</p>
                  <p>Jl Pramuka Kav 150, Utan Kayu Utara</p>
                  <p>Matraman, Jakarta Timur</p>
                  <p>DKI Jakarta, Indonesia</p>
                  <p>Email: admin@exposuregarden.com</p>
                  <p>Phone: (021) 60288761</p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  )
} 