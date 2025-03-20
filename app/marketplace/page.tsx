import { ProductGrid } from "@/components/product-grid"
import { ProductFilters } from "@/components/product-filters"

export default function MarketplacePage() {
  return (
    <div className="px-4 sm:px-6 lg:px-8 py-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold">Professional Video & Photo Editing Services</h1>
        <p className="mt-2 text-muted-foreground">
          Transform your raw footage and images into stunning visual content with our comprehensive editing solutions. From basic color correction to advanced visual effects, 
          our expert editors will help bring your creative vision to life with precision and artistic flair.
        </p>
        <p className="mt-2 text-muted-foreground italic text-sm">
          *All prices are in IDR. Custom editing packages available for specific project requirements. Contact our team for personalized service consultations.
        </p>
        
        <div className="mt-8 lg:grid lg:grid-cols-4 lg:gap-x-8">
          <ProductFilters />
          <ProductGrid />
        </div>
      </div>
    </div>
  )
}