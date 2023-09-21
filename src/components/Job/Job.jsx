const Job = ({ job }) => {
  const { logo } = job;
  return (
    <div>
      <h2>
        <img src={logo} alt="" />
      </h2>
    </div>
  );
};

export default Job;
