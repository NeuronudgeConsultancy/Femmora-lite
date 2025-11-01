export type FooterColumnProps = {
  title: string;
  links: Array<{
    text: string;
    href: string;
  }>;
};

export const FooterColumn = (props: FooterColumnProps) => {
  return (
    <div className="box-border caret-transparent">
      <h4 className="text-white font-bold box-border caret-transparent mb-4">
        {props.title}
      </h4>
      <ul className="box-border caret-transparent list-none pl-0">
        {props.links.map((link, index) => (
          <li
            key={index}
            className={`box-border caret-transparent${index > 0 ? " mt-2" : ""}`}
          >
            <a
              href={link.href}
              className="box-border caret-transparent hover:text-white"
            >
              {link.text}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};
