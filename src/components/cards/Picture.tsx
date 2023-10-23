function Picture() {
  return (
    <div className="rounded-large h-96 w-80 bg-primary relative">
      <img
        className="absolute bottom-0"
        src="/src/assets/images/profile.png"
        alt="profile"
      />
    </div>
  );
}

export default Picture;
