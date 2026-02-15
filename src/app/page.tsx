
import Link from "next/link";
import { Button } from "@/components/ui/Button";

export default function Home() {
  return (
    <main className="relative flex-1 w-full h-full flex flex-col min-h-screen">
      <div className="absolute top-0 left-0 width-full height-full w-full h-full overflow-hidden z-0">
        <video
          autoPlay
          muted
          loop
          className="min-w-full min-h-full w-auto h-auto absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 object-cover"
          poster="https://lh3.googleusercontent.com/aida-public/AB6AXuDm4lpiaDcJEEkwj1nFoOFftwj7iKd0s3xR6vw2gehFy8yBlBx6A43vQV4ot0PeH12OnN5ev4YZZcRr6GZdIbYd7FBFeFNcgJSrjPug4yR96e42cxx7leDblPUmRIUuG7peSfVYe6b9_vnaIEtC4teacmiziZUGeHzF1pvTVqRvKCd6IDOAD1P0TYgVDrVUj5ITB27vUJbBl3cvGDRoTIb_DKWBJXjt7Bq_BRHX2MrLQxrSbAbOmeKUkFOGJPpjvyyZNejCCnbVXAI"
        >
          {/* Note: In a real app, we would serve the video file locally or from a CDN. 
              Since I don't have the video file, I'll use the image as poster and maybe a placeholder video if available, 
              or just rely on the image if no video is provided. 
              Replicating the structure from code.html which implies a video-container but used an img tag in the request.
              The request HTML used an img tag inside a div called video-container. I will stick to the image for now to be safe,
              or use a stock video if I could. The HTML provided in the prompt used an IMG. 
              Let's accept the IMG from the prompt HTML to ensure it works.
           */}
        </video>
        <img
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuDm4lpiaDcJEEkwj1nFoOFftwj7iKd0s3xR6vw2gehFy8yBlBx6A43vQV4ot0PeH12OnN5ev4YZZcRr6GZdIbYd7FBFeFNcgJSrjPug4yR96e42cxx7leDblPUmRIUuG7peSfVYe6b9_vnaIEtC4teacmiziZUGeHzF1pvTVqRvKCd6IDOAD1P0TYgVDrVUj5ITB27vUJbBl3cvGDRoTIb_DKWBJXjt7Bq_BRHX2MrLQxrSbAbOmeKUkFOGJPpjvyyZNejCCnbVXAI"
          alt="Luxury tropical resort"
          className="w-full h-full object-cover absolute inset-0"
        />
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(24,53,93,0.4)_0%,rgba(24,53,93,0.2)_40%,rgba(24,53,93,0.9)_100%)]"></div>
      </div>

      <div className="relative z-40 flex-1 flex flex-col justify-center px-6 pb-20 text-center text-white pt-32">
        <div className="mx-auto w-12 h-1 bg-accent rounded-full mb-8 opacity-80 shadow-[0_0_15px_rgba(212,175,55,0.5)]"></div>
        <h1 className="text-5xl md:text-7xl font-extrabold leading-[1.1] mb-6 drop-shadow-lg tracking-tight">
          Deine Reise,<br />
          <span className="text-white/95">perfekt gebucht.</span>
        </h1>
        <p className="text-lg md:text-xl font-light text-white/90 max-w-md mx-auto mb-10 leading-relaxed tracking-wide drop-shadow-md">
          Persönliche Beratung für unvergessliche Momente.
        </p>
      </div>

      <div className="relative z-50 w-full px-6 pb-12 flex flex-col items-center gap-6">
        <div className="w-full text-center pb-2">
          <p className="text-white/80 font-display italic text-base tracking-widest font-light uppercase border-b border-white/10 inline-block pb-1 px-4">
            Dein Reise. Mein Plan. Deine Momente.
          </p>
        </div>

        <Link href="/planner" className="w-full max-w-sm">
          <Button size="lg" fullWidth className="py-4 text-lg flex items-center justify-center gap-3">
            <span>Jetzt Urlaub planen</span>
            <span className="material-icons-outlined text-xl">arrow_forward</span>
          </Button>
        </Link>

        <div className="flex flex-col items-center gap-4 w-full">
          <div className="flex items-center justify-center gap-6 text-white/60">
            <div className="flex items-center gap-1.5 bg-black/20 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/10">
              <span className="material-icons-outlined text-sm">verified</span>
              <span className="text-xs font-medium uppercase tracking-wider">Premium Service</span>
            </div>
            <div className="flex items-center gap-1.5 bg-black/20 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/10">
              <span className="material-icons-outlined text-sm">stars</span>
              <span className="text-xs font-medium uppercase tracking-wider">Top Rated</span>
            </div>
          </div>
          <Link href="#" className="text-sm text-white/70 hover:text-white transition-colors underline decoration-white/30 underline-offset-4 mt-2">
            Bereits Kunde? <span className="font-semibold">Login</span>
          </Link>
        </div>
      </div>
    </main>
  );
}
