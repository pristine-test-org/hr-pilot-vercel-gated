import Link from "next/link";
import "./test-drive.css";

export const metadata = { title: "HR Pilot - Impeccable test drive" };

export default function ImpeccableTestDrivePage() {
  return (
    <div className="td-page">
      <main className="td-main">
        <div className="td-inner">
          <span className="td-badge">Team update</span>
          <h1 className="td-title">Leave balances, at a glance</h1>
          <p className="td-muted">
            See who is out this week, how many leave days each person has left, and which claims
            are waiting for approval.
          </p>
          <Link href="/" className="td-link">
            Back to the HR Pilot home page
          </Link>
          <div className="td-bar" aria-hidden />
        </div>
        <p className="td-edge">
          HR Pilot keeps leaves, payroll and expense claims in one place, so the whole team can
          check a balance or a payslip without asking HR for a spreadsheet.
        </p>
      </main>
    </div>
  );
}
