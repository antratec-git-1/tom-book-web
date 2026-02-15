
import { BlogCard } from "@/components/blog/BlogCard";

export default function InspirationPage() {
    return (
        <main className="pb-24">
            {/* Inspiration Header */}
            <section className="px-6 pt-8 pb-4">
                <h1 className="text-3xl font-bold leading-tight mb-2 font-display text-primary dark:text-white">Inspiration</h1>
                <p className="text-slate-500 dark:text-slate-400 text-sm italic font-serif">Curated experiences for the discerning traveler.</p>
            </section>

            {/* Category Filters (Static for now) */}
            <div className="flex overflow-x-auto no-scrollbar px-6 gap-3 mb-8">
                <button className="bg-primary text-white px-5 py-2 rounded-full text-xs font-semibold whitespace-nowrap">All Stories</button>
                <button className="bg-primary/10 text-slate-800 dark:text-slate-200 px-5 py-2 rounded-full text-xs font-semibold border border-primary/20 whitespace-nowrap hover:bg-primary/20">Coastal Retreats</button>
                <button className="bg-primary/10 text-slate-800 dark:text-slate-200 px-5 py-2 rounded-full text-xs font-semibold border border-primary/20 whitespace-nowrap hover:bg-primary/20">Cultural Icons</button>
                <button className="bg-primary/10 text-slate-800 dark:text-slate-200 px-5 py-2 rounded-full text-xs font-semibold border border-primary/20 whitespace-nowrap hover:bg-primary/20">Alpine Luxury</button>
            </div>

            {/* Blog Feed */}
            <div className="px-6">
                <BlogCard
                    title="The Azure Allure of the Amalfi Coast"
                    description="Discover a world where lemons grow as large as melons and the cliffs meet the sea in a dramatic dance of colors. Our private villa collection offers unparalleled views..."
                    image="https://lh3.googleusercontent.com/aida-public/AB6AXuAcRRwRxxf_gBzRj_SLWxDM-OSWDNzZZa_8hj5WZ2ZyzQfsaJhXZQaWv7Hw21xeR1XQCODA_8JrsTpgLQaJYUdjH9VxKdbnRQL69-KCRHKZnLqUoNibEA8QeYpGg7RC8F9qJVf0pdVQqhPShnFM13lR2Bgq4m5ECgU1ySICFOQo5Cq4QwMrYwZ0f5qTWnhQqI0zrJXbiWlka1huYGLU1W_RCp-u2vjxhQy6wK-wryIpQZpMYofHBQU-QK_2kCsAXc9d0_Tkzt7osy0"
                    tag="Featured Destination"
                />

                <BlogCard
                    title="Kyoto: Serenity Beyond the Bamboo"
                    description="Uncover the silent majesty of Kyoto's hidden tea houses and private Zen gardens, accessible only to those who seek the path of true craftsmanship and heritage..."
                    image="https://lh3.googleusercontent.com/aida-public/AB6AXuCMVWh_gPv87WR5mRtXkMGfRZjDuWM17nGX07q7CJDdppF3ANNRXxYz56Xc-hy5MKASmixARPOMXM0rFtDzdAiILh2vnE1TD92NBm1Z5daHVCRjE_e2muTrc7t61eCoB9SvZvY_bDasEV21VLzz_sE5UBDtCE09gQbDl8TaGQdsC8ymjv-de3M_kRUjRTsQh2SZP0iokfLlEixgisTdMUJqhvW_31mHGWSDuvK3vwzXPT27SSvSsUm210H_hKSUGROL4tvC9dLqDsU"
                    tag="Exclusive Insight"
                />

                <BlogCard
                    title="Golden Skies: Luxury Safari Living"
                    description="A symphony of wildlife and sophisticated luxury awaits. Experience the Serengeti from the comfort of five-star canvas sanctuaries under a blanket of stars..."
                    image="https://lh3.googleusercontent.com/aida-public/AB6AXuALQpqITMycPg7424Eo__VMG97xqT2CaQk2hmbWh2E_eyQnd5_pyxM-wuVmxWep0aRuC9XR56F0qp5ezXX1tTDHf9LqdJThqXGyOTS7YlWFRQs6Pz79RQa5qosmCNO6X3mF4pCwdXFWnAj-3hQQVnqjyp6hfcxnwPXWhpCJHFerk1Mrl-OJ9uJTIJMEguUPk-lWwypzbfo188zB_oKbmVi4wTO9Aia_kDdpWfLdcCHhe37umzG77UxUd1TdRbWLvpnJHHLq8Uvsw8I"
                    tag="Adventure"
                />
            </div>
        </main>
    );
}
