export function Footer() {
  return (
    <footer className="footer sm:footer-horizontal footer-center text-base-content p-1.5">
      <aside>
        <ul className="flex justify-center items-center gap-2 text-[11px] text-base-content/70">
          <li></li>
          <li>
            Created by{" "}
            <a href="" target="_blank" rel="noreferrer" className="underline">
              Maoulid94
            </a>{" "}
            ~ Ollaix © {new Date().getFullYear()}
          </li>
        </ul>
      </aside>
    </footer>
  );
}
