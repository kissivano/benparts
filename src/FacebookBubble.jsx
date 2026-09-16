function FacebookBubble() {
  return (
    <a
      href="https://www.facebook.com/share/19L3EAiqyC/?mibextid=wwXIfr"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Facebook"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#1877F2] text-white shadow-lg transition duration-300 hover:scale-110 hover:shadow-xl"
    >
      <svg
        viewBox="0 0 24 24"
        className="h-7 w-7 fill-current"
        aria-hidden="true"
      >
        <path d="M13.5 22v-9h3l.5-3.5h-3.5V7.25c0-1 .3-1.75 1.8-1.75H17V2.4c-.7-.1-1.5-.2-2.4-.2-2.4 0-4.1 1.5-4.1 4.3v3H8v3.5h2.5v9h3z" />
      </svg>
    </a>
  );
}

export default FacebookBubble;
