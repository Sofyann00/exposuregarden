import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About Us - exposuregarden',
  description: 'Learn about exposuregarden, your trusted video and photo editing partner in Indonesia',
}

export default function AboutPage() {
  return (
    <main className="min-h-screen py-12 bg-background">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-card p-8 rounded-lg shadow">
          <h1 className="text-3xl font-bold text-foreground mb-4">
            About exposuregarden
          </h1>
          <p className="text-sm text-muted-foreground italic mb-8">
            Your Creative Editing Partner in Indonesia
          </p>

          <section className="space-y-8">
            <div>
              <h2 className="text-xl font-semibold text-foreground mb-3">
                Our Story
              </h2>
              <p className="text-muted-foreground">
                Founded with a passion for visual storytelling, exposuregarden has emerged as a leading video and photo editing studio in Indonesia. Our journey began with a clear vision: to help creators, businesses, and individuals transform their raw footage and images into compelling visual content that captivates audiences and delivers powerful messages.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-foreground mb-3">
                Why Choose Us
              </h2>
              <ul className="text-muted-foreground list-disc pl-5 space-y-2">
                <li>Expert Editing Team with Industry Experience</li>
                <li>Creative Vision and Technical Excellence</li>
                <li>Personalized Editing Approach</li>
                <li>Comprehensive Post-Production Services</li>
                <li>Reliable and Timely Delivery</li>
                <li>Proven Portfolio of Successful Projects</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-foreground mb-3">
                Our Commitment
              </h2>
              <p className="text-muted-foreground">
                At exposuregarden, we are committed to delivering exceptional editing services that elevate your visual content. Our team of skilled editors and creative professionals works tirelessly to understand your unique vision and create tailored solutions that exceed expectations. We pride ourselves on building long-term partnerships and ensuring client success through creativity, attention to detail, and technical excellence.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-foreground mb-3">
                Our Services
              </h2>
              <ul className="text-muted-foreground list-disc pl-5 space-y-2">
                <li>Professional Video Editing</li>
                <li>Color Grading and Correction</li>
                <li>Photo Retouching and Enhancement</li>
                <li>Visual Effects and Animation</li>
                <li>Social Media Content Optimization</li>
                <li>Corporate and Commercial Editing</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-foreground mb-3">
                Studio Location
              </h2>
              <div className="text-muted-foreground">
                <p>Visit our studio:</p>
                <div className="mt-2">
                  <p>exposuregarden</p>
                  <p>Gedung Is Plaza Lt. 5</p>
                  <p>Jl Pramuka Kav 150, Utan Kayu Utara</p>
                  <p>Matraman, Jakarta Timur</p>
                  <p>DKI Jakarta, Indonesia</p>
                  <p>Kode Pos: 13120</p>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-foreground mb-3">
                Business Hours
              </h2>
              <div className="text-muted-foreground grid grid-cols-2 gap-4">
                <div>
                  <p className="font-medium">Weekdays:</p>
                  <p>Monday - Friday</p>
                  <p>09:00 AM - 5:00 PM</p>
                </div>
                <div>
                  <p className="font-medium">Weekends:</p>
                  <p>Closed</p>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-foreground mb-3">
                Contact Information
              </h2>
              <div className="text-muted-foreground">
                <p>Get in touch with us:</p>
                <div className="mt-2 space-y-1">
                  <p>Phone: (021) 60288761</p>
                  <p>Email: admin@exposuregarden.com</p>
                  <p>WhatsApp: +62 812-8845-8953</p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  )
} 