export default function Footer() {
  return (
    <footer className="bg-navy text-white py-6 mt-12">
      <div className="max-w-4xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-3">
        <p className="text-sm">© 2026 Nam Nguyen</p>
        <div className="flex gap-4 text-sm">
          <a
            href="https://github.com/namnguyen"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-300 transition-colors"
          >
            GitHub 🐙
          </a>
          <a
            href="https://linkedin.com/in/namnguyen"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-300 transition-colors"
          >
            LinkedIn 💼
          </a>
          <a
            href="mailto:namnguyen61031@gmail.com"
            className="hover:text-gray-300 transition-colors"
          >
            Email ✉️
          </a>
        </div>
      </div>
    </footer>
  )
}
