import JobList from "./JobList";

export default function JobSection() {
  return (
    <>
      <div className="px-20 space-y-4">
        <div className="flex justify-between pb-12">
          <JobList />
        </div>
      </div>
    </>
  );
}
