import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms of Service - PT INOVASI SEMBILAN TANGAN',
  description: 'Terms of Service and conditions for using exposuregarden video and photo editing services',
}

export default function TermsPage() {
  return (
    <main className="min-h-screen py-12 bg-background">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-card p-8 rounded-lg shadow">
          <h1 className="text-3xl font-bold text-foreground mb-4">
            Terms of Service
          </h1>
          <p className="text-sm text-muted-foreground italic mb-8">
            Last Updated: {new Date().toLocaleDateString()}
          </p>

          <section className="space-y-8">
            <div>
              <h2 className="text-xl font-semibold text-foreground mb-3">
                1. Agreement to Terms
              </h2>
              <p className="text-muted-foreground">
                By accessing and using the services provided by PT INOVASI SEMBILAN TANGAN (hereinafter referred to as &quot;exposuregarden&quot;), you accept and agree to be bound by the terms and provisions of this agreement.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-foreground mb-3">
                2. Services Offered
              </h2>
              <p className="text-muted-foreground">
                exposuregarden provides professional video and photo editing services. All service listings, including prices, turnaround times, and specifications, are subject to change without prior notice. We guarantee the quality and professionalism of all editing services delivered through our platform.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-foreground mb-3">
                3. Revisions and Satisfaction
              </h2>
              <p className="text-muted-foreground">
                All editing projects include a specified number of revision rounds as detailed in the service description. Clients must review delivered work and request any revisions within 7 days of delivery. Additional revision requests beyond the included rounds may incur extra charges. We are committed to client satisfaction and will work to address reasonable revision requests within the scope of the original project.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-foreground mb-3">
                4. Privacy and Data Protection
              </h2>
              <p className="text-muted-foreground">
                We collect and process personal data in accordance with Indonesian data protection laws. This includes client information, project details, and payment information. All client media files are treated with strict confidentiality. For more information, please refer to our Privacy Policy.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-foreground mb-3">
                5. Intellectual Property
              </h2>
              <p className="text-muted-foreground">
                Upon full payment, clients retain all rights to their original content and the edited deliverables provided by exposuregarden. We may request permission to use the final work in our portfolio with appropriate credit. exposuregarden retains rights to the editing techniques, processes, and creative approaches used in the delivery of services.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-foreground mb-3">
                6. Limitation of Liability
              </h2>
              <p className="text-muted-foreground">
                While we guarantee professional quality editing, exposuregarden shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of our services, including but not limited to stylistic preferences or subjective creative differences.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-foreground mb-3">
                7. Governing Law
              </h2>
              <p className="text-muted-foreground">
                These terms are governed by the laws of the Republic of Indonesia. Any disputes shall be subject to the exclusive jurisdiction of the courts in Jakarta, Indonesia.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-foreground mb-3">
                8. Contact Information
              </h2>
              <div className="text-muted-foreground">
                <p>For any questions about these Terms of Service, please contact us at:</p>
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