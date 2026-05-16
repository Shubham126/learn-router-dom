function SocialLinks() {
  return (
    <div className="flex items-center justify-center gap-6 mt-8">

      <a
        href="#"
        className="p-3 rounded-full bg-white/5 border border-white/10 hover:border-cyan-400 hover:scale-110 transition duration-300"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="rgb(34 211 238)"
          className="w-5 h-5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 22.5v-4.5a3.75 3.75 0 00-3.75-3.75H9a3.75 3.75 0 00-3.75 3.75v4.5m10.5-12A3.75 3.75 0 1112 3.75a3.75 3.75 0 013.75 3.75z"
          />
        </svg>
      </a>

      <a
        href="#"
        className="p-3 rounded-full bg-white/5 border border-white/10 hover:border-pink-400 hover:scale-110 transition duration-300"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="rgb(244 114 182)"
          className="w-5 h-5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M7.5 3.75h9A3.75 3.75 0 0120.25 7.5v9A3.75 3.75 0 0116.5 20.25h-9A3.75 3.75 0 013.75 16.5v-9A3.75 3.75 0 017.5 3.75z"
          />
        </svg>
      </a>

      <a
        href="#"
        className="p-3 rounded-full bg-white/5 border border-white/10 hover:border-blue-400 hover:scale-110 transition duration-300"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="rgb(96 165 250)"
          className="w-5 h-5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M16.5 8.25V6A2.25 2.25 0 0014.25 3.75h-4.5A2.25 2.25 0 007.5 6v12A2.25 2.25 0 009.75 20.25h4.5A2.25 2.25 0 0016.5 18V15.75"
          />
        </svg>
      </a>

    </div>
  );
}

export default SocialLinks;