function Toast(): React.JSX.Element {
  const classToast = 'toast'

  return (
    <div className={classToast}>
      <p className={`${classToast}__message`}>
        Error!!!
      </p>
    </div>
  );
}

export default Toast;