export default function Footer() {
  return (
    <footer className="mt-12 pt-8 border-t border-border text-center">
      <div className="flex flex-wrap justify-center gap-4 text-sm mb-4">
        <a href="/privacy-policy" className="hover:underline">
          Privacy Policy
        </a>
        <a href="/terms-of-service" className="hover:underline">
          Terms of Service
        </a>
        <a href="/about-us" className="hover:underline">
          About Us
        </a>
        <a href="/contact" className="hover:underline">
          Contact
        </a>
      </div>

      <p className="text-xs text-muted-foreground">
        © {new Date().getFullYear()} LuckyGen — Lucky Number Generator
      </p>
    </footer>
  );
}
