import { FallingLines } from 'react-loader-spinner';

export const Loader = () => {
  return (
    <div>
      <FallingLines
        color="#395968"
        width="100"
        visible={true}
        ariaLabel="falling-lines-loading"
      />
    </div>
  );
};
