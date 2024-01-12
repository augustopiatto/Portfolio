function Picture() {
  return (
    <div className="rounded-large shadow-card shadow-light-grey h-96 max-w-screen-sm w-full bg-primary flex justify-center items-end large:w-80 large:overflow-hidden">
      <img src="/images/profile.png" alt="profile" className="max-h-[95%]" />
    </div>
  );
}

export default Picture;
