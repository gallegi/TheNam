export default function Footer() {
  return (
    <footer className="bg-navy text-white mt-16">
      <div className="max-w-4xl mx-auto px-4 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm">&copy; 2026 Nam Nguyen</p>
        <div className="flex gap-5 text-sm">
          <a
            href="https://github.com/namnguyen"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-300 transition-colors"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/namnguyen"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-300 transition-colors"
          >
            LinkedIn
          </a>
          <a
            href="mailto:namnguyen61031@gmail.com"
            className="hover:text-gray-300 transition-colors"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  )
}
