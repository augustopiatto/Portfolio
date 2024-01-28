interface PartialDividerInterface {
  marginBottom?: string;
  marginTop?: string;
}

export const PartialDivider = ({
  marginBottom = "",
  marginTop = "",
}: PartialDividerInterface) => {
  return (
    <div
      className={`${marginBottom} ${marginTop} bg-title rounded h-px w-11/12 mx-auto z-10`}
    />
  );
};
