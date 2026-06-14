function Heading({
  title,
  description,
}: {
  title: string;
  description?: string;
}) {
  return (
    <div className="">
      <h2 className="text-3xl font-bold  tracking-tight ">{title}</h2>
      {description && (
        <p className="text-sm text-muted-foreground">{description}</p>
      )}
    </div>
  );
}

export default Heading;
