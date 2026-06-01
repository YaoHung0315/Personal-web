type Props = {
  label: string;
  title: string;
  id?: string;
};

const SectionHeading = ({ label, title, id }: Props) => (
  <div id={id} className="mb-6 scroll-mt-24">
    <p className="section-label mb-1.5">{label}</p>
    <h2 className="text-2xl font-bold tracking-tight text-ink sm:text-[1.7rem]">{title}</h2>
  </div>
);

export default SectionHeading;
