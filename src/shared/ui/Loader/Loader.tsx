import './loaderStyles.scss';


function Loader(): React.JSX.Element {
  const classLoader = 'loader'
  return (
    <div className={classLoader}>
      <p className={`${classLoader}_text`}>
        Loader...
      </p>
    </div>
  );
}

export default Loader;