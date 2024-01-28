interface FullDividerInterface {
  marginBottom?: string;
  marginTop?: string;
}

export const FullDivider = ({
  marginBottom = "",
  marginTop = "",
}: FullDividerInterface) => {
  return <div className={`${marginBottom} ${marginTop} bg-title h-0.5`} />;
};
