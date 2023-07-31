interface ArrowProps {
  color?: string;
}

export const ArrowUpRight = (props: ArrowProps) => {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill={props.color ? props.color : 'none'}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 3.19561L3.19561 12L2 10.8044L10.8044 2L12 3.19561Z"
        fill={props.color ? props.color : 'Black'}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2 2H12V12H10.3333V3.66667H2V2Z"
        fill={props.color ? props.color : 'Black'}
      />
    </svg>
  );
};
