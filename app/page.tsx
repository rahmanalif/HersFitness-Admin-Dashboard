"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

import { RevenueChart } from "@/components/dashboard/revenue-chart";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

const navSections = [
  { label: "Overview", section: "overview", icon: OverviewIcon },
  { label: "Member", section: "members", icon: MembersIcon },
  { label: "Trainer", section: "trainers", icon: TrainerIcon },
  { label: "Verification", section: "verification", icon: ShieldIcon },
  { label: "Transactions", section: "transactions", icon: CardIcon },
  { label: "Support", section: "support", icon: SupportIcon },
];

const metricCards = [
  {
    id: "overview",
    title: "Total Revenue",
    value: "$40,543.00",
    trend: "+3.5%",
    trendTone: "text-[#f7869a]",
  },
  {
    id: "transactions",
    title: "Platform Commission",
    value: "$40,543.00",
    trend: "+3.5%",
    trendTone: "text-[#f7869a]",
  },
  {
    id: "verification",
    title: "Pending Verifications",
    value: "40",
    warning: true,
  },
  {
    id: "members-metric",
    title: "Total Member",
    value: "40,543",
    trend: "+3.5%",
    trendTone: "text-[#16a34a]",
  },
  {
    id: "trainers",
    title: "Active Trainers",
    value: "40,543",
    trend: "+3.5%",
    trendTone: "text-[#16a34a]",
  },
  {
    title: "Bookings This Week",
    value: "30,543",
    trend: "+3.5%",
    trendTone: "text-[#16a34a]",
  },
];

const pendingApprovals = {
  members: [
    { id: "USR-8494", name: "Wade Warren", type: "Member", submitted: "24/02/2024" },
    { id: "USR-8495", name: "Eleanor Pena", type: "Member", submitted: "25/02/2024" },
    { id: "USR-8496", name: "Guy Hawkins", type: "Member", submitted: "26/02/2024" },
    { id: "USR-8497", name: "Sabrina Hill", type: "Member", submitted: "27/02/2024" },
    { id: "USR-8498", name: "Courtney Henry", type: "Member", submitted: "28/02/2024" },
    { id: "USR-8499", name: "Albert Flores", type: "Member", submitted: "29/02/2024" },
    { id: "USR-8500", name: "Annette Black", type: "Member", submitted: "01/03/2024" },
    { id: "USR-8501", name: "Theresa Webb", type: "Member", submitted: "02/03/2024" },
    { id: "USR-8502", name: "Ronald Richards", type: "Member", submitted: "03/03/2024" },
    { id: "USR-8503", name: "Bessie Cooper", type: "Member", submitted: "04/03/2024" },
    { id: "USR-8504", name: "Floyd Miles", type: "Member", submitted: "05/03/2024" },
    { id: "USR-8505", name: "Jerome Bell", type: "Member", submitted: "06/03/2024" },
  ],
  trainers: [
    { id: "TRN-1021", name: "Brooklyn Simmons", type: "Trainer", submitted: "24/02/2024" },
    { id: "TRN-1022", name: "Jerome Bell", type: "Trainer", submitted: "25/02/2024" },
    { id: "TRN-1023", name: "Arlene McCoy", type: "Trainer", submitted: "26/02/2024" },
    { id: "TRN-1024", name: "Darlene Robertson", type: "Trainer", submitted: "27/02/2024" },
    { id: "TRN-1025", name: "Jane Cooper", type: "Trainer", submitted: "28/02/2024" },
    { id: "TRN-1026", name: "Cameron Williamson", type: "Trainer", submitted: "29/02/2024" },
    { id: "TRN-1027", name: "Kristin Watson", type: "Trainer", submitted: "01/03/2024" },
    { id: "TRN-1028", name: "Robert Fox", type: "Trainer", submitted: "02/03/2024" },
    { id: "TRN-1029", name: "Jacob Jones", type: "Trainer", submitted: "03/03/2024" },
    { id: "TRN-1030", name: "Cody Fisher", type: "Trainer", submitted: "04/03/2024" },
    { id: "TRN-1031", name: "Savannah Nguyen", type: "Trainer", submitted: "05/03/2024" },
    { id: "TRN-1032", name: "Eleanor Pena", type: "Trainer", submitted: "06/03/2024" },
  ],
};

const activities = [
  ["New Member", "Rakib Roy", "10 min ago"],
  ["submitted a new testimonial video", "By Maya Patel", "1 day ago"],
  ["Pending Approval", "Liam Chen", "1 day ago"],
  ["Banned", "Sophia Alvarez", "3 days ago"],
  ["Account Upgraded", "Ethan Murphy", "5 days ago"],
];

const members = [
  {
    name: "Wade Warren",
    email: "iam123@gmail.com",
    id: "USR-8494",
    status: "Active",
    joined: "26",
  },
  {
    name: "Eleanor Pena...",
    email: "uam@giaml.com",
    id: "USR-8494",
    status: "Inactive",
    joined: "26",
  },
  {
    name: "Wade Warren",
    email: "iam123@gmail.com",
    id: "USR-8494",
    status: "Active",
    joined: "26",
  },
  {
    name: "Wade Warren",
    email: "iam123@gmail.com",
    id: "USR-8494",
    status: "Active",
    joined: "26",
  },
  {
    name: "Marvin McKinney",
    email: "marvin.mckinney@example.com",
    id: "USR-8494",
    status: "Suspended",
    joined: "34",
  },
  {
    name: "Eleanor Pena...",
    email: "uam@giaml.com",
    id: "USR-8494",
    status: "Inactive",
    joined: "26",
  },
  {
    name: "Wade Warren",
    email: "iam123@gmail.com",
    id: "USR-8494",
    status: "Active",
    joined: "26",
  },
  {
    name: "Eleanor Pena...",
    email: "uam@giaml.com",
    id: "USR-8494",
    status: "Inactive",
    joined: "26",
  },
  {
    name: "Wade Warren",
    email: "iam123@gmail.com",
    id: "USR-8494",
    status: "Active",
    joined: "26",
  },
  {
    name: "Marvin McKinney",
    email: "marvin.mckinney@example.com",
    id: "USR-8494",
    status: "Suspended",
    joined: "34",
  },
  {
    name: "Eleanor Pena...",
    email: "uam@giaml.com",
    id: "USR-8494",
    status: "Inactive",
    joined: "26",
  },
  {
    name: "Eleanor Pena...",
    email: "uam@giaml.com",
    id: "USR-8494",
    status: "Inactive",
    joined: "26",
  },
];

const trainers = [
  {
    name: "Wade Warren",
    user: "USER 123",
    specialty: "USR-8494",
    classes: "08",
    status: "Active",
    rating: "26",
  },
  {
    name: "Eleanor Pena...",
    user: "USER 123",
    specialty: "USR-8494",
    classes: "08",
    status: "Inactive",
    rating: "26",
  },
  {
    name: "Wade Warren",
    user: "USER 123",
    specialty: "USR-8494",
    classes: "08",
    status: "Active",
    rating: "26",
  },
  {
    name: "Wade Warren",
    user: "USER 123",
    specialty: "USR-8494",
    classes: "08",
    status: "Active",
    rating: "26",
  },
  {
    name: "Marvin McKinney",
    user: "USER 123",
    specialty: "USR-8494",
    classes: "08",
    status: "Suspended",
    rating: "34",
  },
  {
    name: "Eleanor Pena...",
    user: "USER 123",
    specialty: "USR-8494",
    classes: "08",
    status: "Inactive",
    rating: "26",
  },
  {
    name: "Wade Warren",
    user: "USER 123",
    specialty: "USR-8494",
    classes: "08",
    status: "Active",
    rating: "26",
  },
  {
    name: "Eleanor Pena...",
    user: "USER 123",
    specialty: "USR-8494",
    classes: "08",
    status: "Inactive",
    rating: "26",
  },
  {
    name: "Wade Warren",
    user: "USER 123",
    specialty: "USR-8494",
    classes: "08",
    status: "Active",
    rating: "26",
  },
  {
    name: "Marvin McKinney",
    user: "USER 123",
    specialty: "USR-8494",
    classes: "08",
    status: "Suspended",
    rating: "34",
  },
  {
    name: "Eleanor Pena...",
    user: "USER 123",
    specialty: "USR-8494",
    classes: "08",
    status: "Inactive",
    rating: "26",
  },
  {
    name: "Eleanor Pena...",
    user: "USER 123",
    specialty: "USR-8494",
    classes: "08",
    status: "Inactive",
    rating: "26",
  },
];

const transactions = [
  {
    id: "TXN-9925",
    date: "25 Dec 2019",
    payBy: "Luna Ian",
    payBySub: "Sophia",
    amount: "$500",
    fee: "10%",
    trainerGet: "$1 300",
    status: "Completed",
  },
  {
    id: "TXN-9925",
    date: "1 Feb 2020",
    payBy: "Emma",
    payBySub: "Emma",
    amount: "$1 300",
    fee: "10%",
    trainerGet: "$1 900",
    status: "Completed",
  },
  {
    id: "TXN-9925",
    date: "24 Oct 2019",
    payBy: "Olivia",
    payBySub: "Olivia",
    amount: "$1 200",
    fee: "10%",
    trainerGet: "$400",
    status: "Processing",
  },
  {
    id: "TXN-9925",
    date: "17 Oct 2019",
    payBy: "USR-9123",
    payBySub: "Ava",
    amount: "$1 500",
    fee: "10%",
    trainerGet: "$1 100",
    status: "Completed",
  },
  {
    id: "TXN-9925",
    date: "3 Jan 2020",
    payBy: "Isabella",
    payBySub: "Isabella",
    amount: "$2 000",
    fee: "10%",
    trainerGet: "$1 000",
    status: "Processing",
  },
  {
    id: "TXN-9925",
    date: "8 Jun 2020",
    payBy: "USR-4559",
    payBySub: "Mia",
    amount: "$1 000",
    fee: "10%",
    trainerGet: "$800",
    status: "Completed",
  },
  {
    id: "TXN-9925",
    date: "21 Sep 2018",
    payBy: "Evelyn",
    payBySub: "Evelyn",
    amount: "$1 700",
    fee: "10%",
    trainerGet: "$300",
    status: "Processing",
  },
  {
    id: "TXN-9925",
    date: "7 Oct 2019",
    payBy: "Abigail",
    payBySub: "Abigail",
    amount: "$1 900",
    fee: "10%",
    trainerGet: "$600",
    status: "Completed",
  },
  {
    id: "TXN-9925",
    date: "8 Sep 2020",
    payBy: "Ella",
    payBySub: "Ella",
    amount: "$1 600",
    fee: "10%",
    trainerGet: "$500",
    status: "Completed",
  },
  {
    id: "TXN-9925",
    date: "13 Feb 2020",
    payBy: "Harper",
    payBySub: "Harper",
    amount: "$700",
    fee: "10%",
    trainerGet: "$1 700",
    status: "Completed",
  },
  {
    id: "TXN-9926",
    date: "15 Jul 2020",
    payBy: "Lucas",
    payBySub: "Lucas",
    amount: "$2 300",
    fee: "15%",
    trainerGet: "$1 200",
    status: "Pending",
  },
];

const supportTickets = [
  {
    id: "T-001",
    status: "New",
    title: "Auto-Approve Bookings",
    date: "15 May 26 8:00 pm",
    replies: "1 reply",
    expanded: false,
    comments: [],
  },
  {
    id: "T-001",
    status: "In Progress",
    title: "Auto-Approve Bookings",
    date: "15 May 26 8:00 pm",
    expanded: true,
    comments: [
      {
        author: "Deja Brady",
        initial: "D",
        date: "15 May 2020 8:00 pm",
        body: "I filled in Section 2 of the AM2 checklist yesterday but when I logged in today it was all blank again. I have tried on Chrome and Firefox.",
        tone: "neutral",
      },
      {
        author: "Deja Brady",
        initial: "D",
        date: "15 May 2020 8:00 pm",
        body: "Hi James, we are looking into this. Could you try clearing your browser cache and trying again?",
        tone: "reply",
      },
    ],
    replyBox: true,
  },
  {
    id: "T-001",
    status: "Resolved",
    title: "Auto-Approve Bookings",
    date: "15 May 26 8:00 pm",
    expanded: true,
    comments: [
      {
        author: "Deja Brady",
        initial: "D",
        date: "15 May 26 8:00 pm",
        body: "I filled in Section 2 of the AM2 checklist yesterday but when I logged in today it was all blank again. I have tried on Chrome and Firefox.",
        tone: "neutral",
      },
      {
        author: "Deja Brady",
        initial: "D",
        date: "15 May 26 8:00 pm",
        body: "Hi James, we are looking into this. Could you try clearing your browser cache and trying again?",
        tone: "reply",
      },
    ],
    resolved: true,
  },
];

type DashboardSection =
  | "overview"
  | "members"
  | "trainers"
  | "verification"
  | "transactions"
  | "support"
  | "settings";

export default function Home() {
  const [isSignedIn, setIsSignedIn] = useState(false);
  const [activeSection, setActiveSection] =
    useState<DashboardSection>("verification");
  const [selectedMember, setSelectedMember] =
    useState<(typeof members)[number] | null>(null);
  const [selectedTrainer, setSelectedTrainer] =
    useState<(typeof trainers)[number] | null>(null);

  if (!isSignedIn) {
    return <SignInScreen onSignIn={() => setIsSignedIn(true)} />;
  }

  return (
    <main className="h-screen overflow-hidden bg-white text-[#121212]">
      <div className="grid h-screen lg:grid-cols-[272px_minmax(0,1fr)]">
        <Sidebar
          activeSection={activeSection}
          onNavigate={setActiveSection}
          onLogout={() => setIsSignedIn(false)}
        />
        <div className="flex min-h-0 min-w-0 flex-col">
          <Topbar />
          <section
            aria-labelledby={`${activeSection}-title`}
            className={cn(
              "flex min-h-0 w-full flex-1 flex-col gap-6 overflow-hidden px-6 lg:px-8",
              activeSection === "verification" ? "py-4" : "py-6",
            )}
          >
            {activeSection === "overview" ? <OverviewSection /> : null}
            {activeSection === "members" ? (
              <MemberSection onOpenMemberDetails={setSelectedMember} />
            ) : null}
            {activeSection === "trainers" ? (
              <TrainerSection onOpenTrainerDetails={setSelectedTrainer} />
            ) : null}
            {activeSection === "verification" ? <VerificationSection /> : null}
            {activeSection === "transactions" ? <TransactionsSection /> : null}
            {activeSection === "support" ? <SupportSection /> : null}
            {activeSection === "settings" ? <SettingsSection /> : null}
            {activeSection !== "overview" &&
              activeSection !== "members" &&
              activeSection !== "trainers" &&
              activeSection !== "verification" &&
              activeSection !== "transactions" &&
              activeSection !== "support" &&
              activeSection !== "settings" ? (
              <ComingSoonSection section={activeSection} />
            ) : null}
          </section>
        </div>
      </div>
      {selectedMember ? (
        <MemberDetailsModal
          member={selectedMember}
          onClose={() => setSelectedMember(null)}
        />
      ) : null}
      {selectedTrainer ? (
        <TrainerDetailsModal
          trainer={selectedTrainer}
          onClose={() => setSelectedTrainer(null)}
        />
      ) : null}
    </main>
  );
}

function SignInScreen({
  onSignIn,
}: {
  onSignIn: () => void;
}) {
  return (
    <main className="login-figma-bg relative grid min-h-screen overflow-hidden px-5 py-8 text-[#121212]">
      <form
        aria-labelledby="sign-in-title"
        className="styled-form relative z-10 m-auto flex w-full max-w-[408px] flex-col items-center gap-4 p-10"
        onSubmit={(event) => {
          event.preventDefault();
          onSignIn();
        }}
      >
        <Image
          src="/figma-assets/hers-fitness-logo.png"
          alt="Hers Fitness"
          width={280}
          height={168}
          priority
          className="h-auto w-[280px] max-w-full object-contain"
        />

        <h1
          id="sign-in-title"
          className="w-full pb-8 text-center text-2xl font-bold text-[#121212]"
        >
          Login
        </h1>

        <div className="flex w-full flex-col gap-[10px]">
          <label className="flex flex-col gap-2">
            <span className="sr-only">Enter your E-mail</span>
            <span className="styled-input-container flex h-12 items-center gap-3 px-4 py-3">
              <MailIcon className="size-6 shrink-0 text-[#7a7a7a]" />
              <input
                type="email"
                placeholder="Username"
                className="min-w-0 flex-1 border-0 bg-transparent text-sm font-normal text-[#121212] outline-none placeholder:text-[#7a7a7a]"
              />
            </span>
          </label>

          <div className="flex flex-col gap-2">
            <label className="flex flex-col gap-2">
              <span className="sr-only">Password</span>
              <span className="styled-input-container flex h-12 items-center gap-3 px-4 py-3">
                <LockThinIcon className="size-6 shrink-0 text-[#7a7a7a]" />
                <input
                  type="password"
                  placeholder="Password"
                  className="min-w-0 flex-1 border-0 bg-transparent text-sm font-normal text-[#121212] outline-none placeholder:text-[#7a7a7a]"
                />
              </span>
            </label>

            <div className="mt-2 flex items-center justify-between gap-4">
              <div className="flex items-center gap-2">
                <div className="checkbox-styled-wrapper">
                  <label className="checkbox-container" aria-label="Remember me">
                    <input type="checkbox" defaultChecked />
                    <div className="checkmark" />
                  </label>
                </div>
                <span className="text-sm font-medium text-[#4a4a4a]">
                  Remember me
                </span>
              </div>
              <button
                type="button"
                className="text-sm font-medium text-[#121212] transition-colors hover:text-[#f7869a]"
              >
                Forgot password?
              </button>
            </div>
          </div>
        </div>

        <button
          type="submit"
          className="styled-btn mt-8 flex h-12 items-center justify-center self-center px-6 text-base font-medium text-black"
        >
          Submit
        </button>
      </form>
    </main>
  );
}

function OverviewSection() {
  return (
    <>
      <h1 id="overview-title" className="sr-only">
        Overview
      </h1>
      <section
        aria-label="Dashboard metrics"
        className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3"
      >
        {metricCards.map((metric) => (
          <MetricCard key={metric.title} {...metric} />
        ))}
      </section>
      <section
        className="grid grid-cols-1 gap-6 xl:grid-cols-3"
        aria-label="Hiring revenue and recent activity"
      >
        <RevenueChart />
        <RecentActivity />
      </section>
    </>
  );
}

function Sidebar({
  activeSection,
  onNavigate,
  onLogout,
}: {
  activeSection: DashboardSection;
  onNavigate: (section: DashboardSection) => void;
  onLogout: () => void;
}) {
  return (
    <aside className="flex h-screen overflow-hidden border-b border-[#e0e0e0] bg-white px-[18px] py-[30px] lg:flex-col lg:border-b-0 lg:border-r">
      <div className="flex min-h-0 w-full flex-1 flex-col gap-[27px]">
        <a className="mx-auto block h-[77px] w-[216px]" href="#overview">
          <Image
            src="/figma-assets/hers-fitness-logo.png"
            alt="Hers Fitness"
            width={216}
            height={77}
            priority
            className="h-full w-full object-contain"
          />
        </a>

        <nav aria-label="Dashboard sections" className="flex min-h-0 flex-1 flex-col justify-between">
          <div className="flex flex-col gap-[35px]">
            <div className="flex flex-col gap-3">
              <p className="text-xs font-semibold leading-4 text-[#121212]">
                Main Menu
              </p>
              <div className="flex flex-col gap-1">
                {navSections.map((item) => (
                  <SidebarLink
                    key={item.label}
                    {...item}
                    active={activeSection === item.section}
                    onClick={() => onNavigate(item.section as DashboardSection)}
                  />
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-3" id="settings">
              <p className="text-xs font-semibold leading-4 text-[#121212]">
                Other
              </p>
              <SidebarLink
                label="Settings"
                icon={SettingsIcon}
                active={activeSection === "settings"}
                onClick={() => onNavigate("settings")}
              />
            </div>
          </div>
        </nav>
      </div>

      <div className="mt-auto">
        <SidebarClockCard onLogout={onLogout} />
      </div>
    </aside>
  );
}

function SidebarClockCard({ onLogout }: { onLogout: () => void }) {
  const [now, setNow] = useState<Date | null>(null);

  useEffect(() => {
    setNow(new Date());
    const timer = window.setInterval(() => setNow(new Date()), 1000);

    return () => window.clearInterval(timer);
  }, []);

  const timeParts = now
    ? new Intl.DateTimeFormat("en-US", {
        hour: "numeric",
        minute: "2-digit",
        hour12: true,
      })
        .formatToParts(now)
        .reduce(
          (parts, part) => {
            if (part.type === "hour") parts.time = part.value;
            if (part.type === "minute") parts.time += `:${part.value}`;
            if (part.type === "dayPeriod") parts.period = part.value;
            return parts;
          },
          { time: "", period: "" },
        )
    : { time: "11:11", period: "PM" };

  const dayText = now
    ? `${new Intl.DateTimeFormat("en-US", { weekday: "long" }).format(now)}, ${new Intl.DateTimeFormat("en-US", { month: "long" }).format(now)} ${formatOrdinal(now.getDate())}`
    : "Wednesday, June 15th";

  return (
    <div
      className="group relative flex h-[196px] w-full flex-col overflow-hidden rounded-[15px] border border-[#f7869a]/25 bg-[linear-gradient(135deg,#fff7f9_0%,#fdf2f4_48%,#ffffff_100%)] text-[#121212] shadow-[0_12px_32px_rgba(247,134,154,0.18)] transition-shadow duration-300 hover:shadow-[0_16px_38px_rgba(247,134,154,0.26)]"
      aria-label={`${timeParts.time} ${timeParts.period}, ${dayText}`}
    >
      <div className="flex flex-1 flex-col justify-center px-4">
        <p className="text-[42px] font-semibold leading-none text-[#121212]">
          <span>{timeParts.time}</span>
          <span className="ml-1.5 align-baseline text-sm text-[#f7869a]">
            {timeParts.period}
          </span>
        </p>
        <p className="mt-3 text-[15px] font-medium leading-5 text-[#7a7a7a]">
          {dayText}
        </p>
      </div>

      <div className="px-4 pb-6">
        <button type="button" className="logout-3d" onClick={onLogout}>
          <LogoutIcon className="size-5 shrink-0" />
          <span>Logout</span>
        </button>
      </div>

      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 16 16"
        fill="currentColor"
        className="absolute right-4 top-4 size-5 text-[#f7869a] transition-all duration-300 group-hover:size-6"
        aria-hidden="true"
      >
        <path d="M6 .278a.768.768 0 0 1 .08.858 7.208 7.208 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277.527 0 1.04-.055 1.533-.16a.787.787 0 0 1 .81.316.733.733 0 0 1-.031.893A8.349 8.349 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.752.752 0 0 1 6 .278z" />
        <path d="M10.794 3.148a.217.217 0 0 1 .412 0l.387 1.162c.173.518.579.924 1.097 1.097l1.162.387a.217.217 0 0 1 0 .412l-1.162.387a1.734 1.734 0 0 0-1.097 1.097l-.387 1.162a.217.217 0 0 1-.412 0l-.387-1.162A1.734 1.734 0 0 0 9.31 6.593l-1.162-.387a.217.217 0 0 1 0-.412l1.162-.387a1.734 1.734 0 0 0 1.097-1.097l.387-1.162zM13.863.099a.145.145 0 0 1 .274 0l.258.774c.115.346.386.617.732.732l.774.258a.145.145 0 0 1 0 .274l-.774.258a1.156 1.156 0 0 0-.732.732l-.258.774a.145.145 0 0 1-.274 0l-.258-.774a1.156 1.156 0 0 0-.732-.732l-.774-.258a.145.145 0 0 1 0-.274l.774-.258c.346-.115.617-.386.732-.732L13.863.1z" />
      </svg>
    </div>
  );
}

function formatOrdinal(day: number) {
  if (day > 3 && day < 21) return `${day}th`;

  switch (day % 10) {
    case 1:
      return `${day}st`;
    case 2:
      return `${day}nd`;
    case 3:
      return `${day}rd`;
    default:
      return `${day}th`;
  }
}

function SidebarLink({
  label,
  icon: Icon,
  active,
  soft,
  onClick,
}: {
  label: string;
  icon: IconComponent;
  active?: boolean;
  soft?: boolean;
  onClick?: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "flex h-12 w-full items-center gap-3 rounded-[14px] px-3 text-left text-base leading-6 transition-colors focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#f7869a]/30",
        active && "bg-[#f7869a] text-white shadow-[0_0_0_4px_rgba(247,134,154,0.3)]",
        soft && !active && "bg-[#fdf2f4] text-[#121212]",
        !active && !soft && "text-[#121212] hover:bg-[#fdf2f4]",
      )}
      aria-current={active ? "page" : undefined}
    >
      <Icon className="size-6 shrink-0" active={active} />
      <span>{label}</span>
    </button>
  );
}

function Topbar() {
  return (
    <header className="flex min-h-[108px] flex-col gap-4 border-b border-[#e0e0e0] px-6 py-[18px] md:flex-row md:items-center md:justify-between lg:px-8">
      <div className="relative w-full max-w-[498px]">
        <SearchIcon className="pointer-events-none absolute left-4 top-1/2 size-6 -translate-y-1/2 text-[#121212]" />
        <Input aria-label="Search supplements" placeholder="Search supplements..." />
      </div>
      <div className="flex items-center gap-8">
        <BellButton />
        <div className="h-[52px] w-px bg-[#e0e0e0]" aria-hidden="true" />
        <a
          href="#profile"
          className="flex items-center gap-2 px-[18px] py-3 text-lg font-medium leading-7 text-[#1f1f1f]"
        >
          <Image
            src="/figma-assets/heba-avatar.png"
            alt=""
            width={48}
            height={48}
            className="size-12 rounded-full object-cover"
          />
          <span>Heba Eid</span>
        </a>
      </div>
    </header>
  );
}

function BellButton() {
  return (
    <button
      type="button"
      aria-label="Notifications"
      className="flex size-[46px] items-center justify-center rounded-[25px] border-b-2 border-[#f7869a] bg-[#f7f7f7] p-3 text-[#121212] shadow-[0_1px_3px_rgba(0,0,0,0.1),0_1px_2px_-1px_rgba(0,0,0,0.1)] transition-transform hover:-translate-y-0.5 hover:bg-[#efefef] hover:shadow-[0_6px_16px_rgba(247,134,154,0.25),0_1px_2px_-1px_rgba(0,0,0,0.1)] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#f7869a]/30"
    >
      <BellIcon className="size-6" />
    </button>
  );
}

function MetricCard({
  id,
  title,
  value,
  trend,
  trendTone,
  warning,
}: {
  id?: string;
  title: string;
  value: string;
  trend?: string;
  trendTone?: string;
  warning?: boolean;
}) {
  return (
    <Card
      id={id}
      className={cn(
        "min-h-[136px] scroll-mt-28 border-[0.5px] p-6 shadow-[0_1px_2px_rgba(0,0,0,0.05)]",
        warning
          ? "border-[#fef3c7] bg-[rgba(217,119,6,0.1)]"
          : "border-[rgba(247,134,154,0.3)] bg-[rgba(247,134,154,0.1)]",
      )}
    >
      <div className="flex items-start justify-between gap-4">
        <div className="flex min-w-0 flex-col gap-[14px]">
          <p className="text-base font-medium leading-6 text-[#7a7a7a]">
            {title}
          </p>
          <p className="text-[32px] font-bold leading-none text-[#121212]">
            {value}
          </p>
          {trend ? (
            <p className="text-base font-medium leading-6 text-[#4a4a4a]">
              <span className={trendTone}>{trend}</span> than last month
            </p>
          ) : null}
        </div>
        <span className="flex size-10 shrink-0 items-center justify-center rounded-[10px] bg-white">
          <ArrowUpRightIcon className="size-6" />
        </span>
      </div>
    </Card>
  );
}

function RecentActivity() {
  return (
    <Card className="h-[360px] overflow-hidden rounded-[14px] border-[#e2e8f0] bg-white shadow-none">
      <CardHeader className="gap-2 px-4 py-2.5 text-[#0f172a]">
        <h2 className="text-base font-medium leading-6">Recent Activity</h2>
        <p className="text-xs font-medium leading-4">Recent Activity</p>
      </CardHeader>
      <CardContent id="logout" className="scroll-mt-28 pt-3">
        {activities.map(([title, person, time]) => (
          <article
            key={`${title}-${person}`}
            className="flex min-h-[70px] gap-3 border-t border-[#e2e8f0] px-3 py-[13px]"
          >
            <Image
              src="/figma-assets/activity-avatar.png"
              alt=""
              width={30}
              height={30}
              className="size-[30px] rounded-full object-cover"
            />
            <div className="min-w-0 flex-1">
              <div className="flex min-h-5 items-start gap-2">
                <p className="min-w-0 flex-1 text-sm font-medium leading-5 text-[#0f172a]">
                  {title}
                </p>
                <span className="flex shrink-0 items-center gap-2 text-xs font-medium leading-4 text-[#344056]">
                  <ClockIcon className="size-[17px]" />
                  {time}
                </span>
              </div>
              <p className="text-sm font-medium leading-5 text-[#344056]">
                {person}
              </p>
            </div>
          </article>
        ))}
      </CardContent>
    </Card>
  );
}

function MemberSection({
  onOpenMemberDetails,
}: {
  onOpenMemberDetails: (member: (typeof members)[number]) => void;
}) {
  return (
    <section
      id="members"
      aria-labelledby="members-title"
      className="min-h-0 flex-1"
    >
      <h2 id="members-title" className="sr-only">
        Members
      </h2>
      <Card className="flex h-full min-h-0 flex-col overflow-hidden rounded-lg border-[#c4cdd5] bg-white shadow-none">
        <div className="min-h-0 flex-1 overflow-hidden">
          <table className="min-w-[900px] w-full border-collapse text-left font-['Public_Sans',Arial,sans-serif]">
            <thead>
              <tr className="h-[52px] bg-white text-sm font-semibold leading-[22px] tracking-[0.22px] text-[#1c252e]">
                <MemberHeader className="w-[43%]">User</MemberHeader>
                <MemberHeader className="w-[18%]">ID</MemberHeader>
                <MemberHeader className="w-[18%]">Status</MemberHeader>
                <MemberHeader className="w-[13%]">Joined</MemberHeader>
                <MemberHeader className="w-[8%] text-right">Actions</MemberHeader>
              </tr>
            </thead>
            <tbody>
              {members.map((member, index) => (
                <tr key={`${member.name}-${index}`} className="h-[52px]">
                  <td className="border-b border-dashed border-[#c4cdd5] px-3 py-2">
                    <div className="flex min-w-0 items-center gap-3">
                      <Image
                        src="/figma-assets/member-avatar.png"
                        alt=""
                        width={32}
                        height={32}
                        className="size-8 rounded-full object-cover"
                      />
                      <div className="min-w-0">
                        <p className="truncate text-sm font-normal leading-[22px] tracking-[0.22px] text-[#1c252e]">
                          {member.name}
                        </p>
                        <p className="truncate text-xs font-normal leading-[18px] tracking-[0.18px] text-[#454f5b]">
                          {member.email}
                        </p>
                      </div>
                    </div>
                  </td>
                  <td className="border-b border-dashed border-[#c4cdd5] px-3 py-2 text-sm leading-[22px] tracking-[0.22px] text-[#1c252e]">
                    {member.id}
                  </td>
                  <td className="border-b border-dashed border-[#c4cdd5] px-3 py-2">
                    <StatusBadge status={member.status} />
                  </td>
                  <td className="border-b border-dashed border-[#c4cdd5] px-3 py-2 text-sm leading-[22px] tracking-[0.22px] text-[#1c252e]">
                    {member.joined}
                  </td>
                  <td className="border-b border-dashed border-[#c4cdd5] px-3 py-2 text-right">
                    <button
                      type="button"
                      onClick={() => onOpenMemberDetails(member)}
                      className="inline-flex size-8 items-center justify-center rounded-md text-[#454f5b] hover:bg-[#f7f7f7] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#f7869a]/30"
                      aria-label={`Open actions for ${member.name}`}
                    >
                      <KebabIcon className="size-5" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <TablePagination />
      </Card>
    </section>
  );
}

function MemberDetailsModal({
  member,
  onClose,
}: {
  member: (typeof members)[number];
  onClose: () => void;
}) {
  return (
    <div
      className="fixed inset-0 z-50 flex justify-end bg-black/45 p-3"
      role="presentation"
      onMouseDown={onClose}
    >
      <section
        role="dialog"
        aria-modal="true"
        aria-labelledby="member-details-title"
        className="flex h-[calc(100vh-24px)] w-full max-w-[512px] flex-col overflow-hidden rounded-2xl bg-white shadow-[0_25px_25px_rgba(0,0,0,0.25)]"
        onMouseDown={(event) => event.stopPropagation()}
      >
        <header className="flex h-[77px] shrink-0 items-center justify-between border-b border-[#f3f4f6] px-6 pb-px">
          <h2
            id="member-details-title"
            className="text-xl font-medium leading-7 tracking-[0.1px] text-[#101828]"
          >
            Member Details
          </h2>
          <button
            type="button"
            onClick={onClose}
            className="flex size-8 items-center justify-center rounded-full text-[#101828] transition-colors hover:bg-[#f7f7f7] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#f7869a]/30"
            aria-label="Close member details"
          >
            <CloseIcon className="size-6" />
          </button>
        </header>

        <div className="min-h-0 flex-1 overflow-y-auto px-6 py-4">
          <div className="flex flex-col gap-4">
            <div className="flex items-start gap-4">
              <div className="flex min-w-0 flex-1 items-center gap-4">
                <div className="size-24 shrink-0 rounded-full border-4 border-white bg-[#d1d6db] shadow-[0_4px_6px_-1px_rgba(0,0,0,0.1),0_2px_4px_-2px_rgba(0,0,0,0.1)]" />
                <div className="min-w-0 flex-1">
                  <h3 className="truncate text-2xl font-medium leading-8 tracking-[0.12px] text-[#121212]">
                    {member.name.replace("...", "")}
                  </h3>
                  <p className="text-lg font-normal leading-7 tracking-[0.09px] text-[#4a4a4a]">
                    User ID : {member.id}
                  </p>
                  <p className="text-lg font-normal leading-7 tracking-[0.09px] text-[#4a4a4a]">
                    Joined : Oct 24, 2023
                  </p>
                </div>
              </div>
              <span className="flex h-6 items-center justify-center rounded bg-[#22c55e]/10 px-2 text-base font-medium leading-6 tracking-[0.08px] text-[#16a34a]">
                Active
              </span>
            </div>

            <div className="border-t border-[#e0e0e0] pt-2">
              <div className="flex items-center gap-2">
                <ShieldIcon className="size-6 text-[#121212]" />
                <p className="text-sm font-normal leading-5 tracking-[0.07px] text-[#121212]">
                  Documents Provided
                </p>
              </div>
              <div className="mt-2 grid grid-cols-2 gap-2">
                <DocumentButton>ID Front</DocumentButton>
                <DocumentButton>ID Back</DocumentButton>
              </div>
            </div>

            <TagPanel
              icon={<StretchIcon className="size-6 text-[#f7869a]" />}
              caption="physical limitations"
              tags={["Athritis", "Back Pain", "Asthma", "Obesity"]}
            />
            <TagPanel
              icon={<PrescriptionIcon className="size-6 text-[#e06f83]" />}
              caption="Supplements"
              tagTone="text-[#e06f83]"
              tags={["Protein", "Magnesium", "Vitamin D"]}
            />

            <div className="grid grid-cols-2 gap-1.5">
              <InfoTile
                icon={<SmileIcon className="size-6 text-[#f7869a]" />}
                value="7-8"
                unit="hr"
                label="Sleep"
              />
              <InfoTile
                icon={<DietIcon className="size-6 text-[#0284c7]" />}
                value="Carbo Diet"
                label="specific diet"
              />
            </div>

            <div className="grid grid-cols-3 gap-1.5">
              <InfoTile
                icon={<CalendarSolidIcon className="size-6 text-[#fb7185]" />}
                value="18"
                unit="yr"
                label="Current Age"
              />
              <InfoTile
                icon={<WeightIcon className="size-6 text-[#16a34a]" />}
                value="18"
                unit="kg"
                label="Current weight"
              />
              <InfoTile
                icon={<DietIcon className="size-6 text-[#0284c7]" />}
                value="Carbo Diet"
                label="specific diet"
              />
            </div>

            <ContactCard
              icon={<ContactBookIcon className="size-6 text-[#f7869a]" />}
              title="Contact Info"
              lines={["(225) 555-0118", "Example@email.com"]}
            />
            <ContactCard
              icon={<LocationPinIcon className="size-6 text-[#f7869a]" />}
              title="Location"
              lines={["578 Boolean Ave, New York, NY, Turing St"]}
            />

            <section className="flex flex-col gap-3">
              <div className="border-b border-[#e0e0e0] pb-px">
                <h3 className="px-3.5 py-3 text-lg font-medium leading-7 tracking-[0.09px] text-[#4a4a4a]">
                  Recent Activity
                </h3>
              </div>
              <ActivityRow />
              <ActivityRow />
            </section>
          </div>
        </div>

        <footer className="shrink-0 bg-white px-6 pb-4 pt-2">
          <button
            type="button"
            className="flex h-12 w-full items-center justify-center rounded-lg border border-[#d32f2f] bg-[#fee2e2] px-6 py-3 text-base font-medium leading-6 tracking-[0.08px] text-[#121212] shadow-[0_0_0_0_rgba(247,134,154,0.3)] transition-colors hover:bg-[#fbd4d4] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#f7869a]/30"
          >
            Suspend User
          </button>
        </footer>
      </section>
    </div>
  );
}

function DocumentButton({ children }: { children: React.ReactNode }) {
  return (
    <button
      type="button"
      className="flex h-[43px] items-center justify-center rounded-lg bg-[#fdf2f4] p-3.5 text-[10px] font-medium leading-[15px] text-[#64748b] transition-colors hover:bg-[#f9e8ec] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#f7869a]/30"
    >
      {children}
    </button>
  );
}

function TagPanel({
  icon,
  tags,
  caption,
  tagTone = "text-[#f7869a]",
}: {
  icon: React.ReactNode;
  tags: string[];
  caption: string;
  tagTone?: string;
}) {
  return (
    <section className="flex flex-col gap-3 rounded-3xl border border-[#f2f2f2] bg-white p-3 shadow-[0_1px_1px_rgba(0,0,0,0.05)]">
      {icon}
      <div className="flex flex-col gap-2">
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className={cn(
                "flex h-7 items-center justify-center rounded-[9px] bg-[#fdf2f4] px-2.5 py-1.5 text-center text-sm font-medium leading-5 tracking-[0.07px]",
                tagTone,
              )}
            >
              {tag}
            </span>
          ))}
        </div>
        <p className="text-xs font-normal leading-4 tracking-[0.06px] text-[#7a7a7a]">
          {caption}
        </p>
      </div>
    </section>
  );
}

function InfoTile({
  icon,
  value,
  unit,
  label,
  valueBadge,
}: {
  icon: React.ReactNode;
  value: string;
  unit?: string;
  label: string;
  valueBadge?: boolean;
}) {
  return (
    <article className="flex min-h-[104px] flex-col gap-2 rounded-3xl border border-[#f2f2f2] bg-white p-3.5 shadow-[0_1px_1px_rgba(0,0,0,0.05)]">
      {icon}
      <div className="flex flex-col gap-2">
        <p className="leading-none">
          <span
            className={cn(
              valueBadge
                ? "inline-flex h-7 items-center rounded-[9px] bg-[#fdf2f4] px-2.5 py-1.5 text-sm font-medium leading-5 tracking-[0.07px] text-[#f7869a]"
                : "text-base font-medium leading-6 tracking-[0.08px] text-[#121212]",
            )}
          >
            {value}
          </span>
          {unit ? (
            <span className="ml-0.5 text-sm font-normal leading-5 tracking-[0.07px] text-[#4a4a4a]">
              {unit}
            </span>
          ) : null}
        </p>
        <p className="text-xs font-normal leading-4 tracking-[0.06px] text-[#7a7a7a]">
          {label}
        </p>
      </div>
    </article>
  );
}

function ContactCard({
  icon,
  title,
  lines,
}: {
  icon: React.ReactNode;
  title: string;
  lines: string[];
}) {
  return (
    <article className="rounded-3xl border border-[#f2f2f2] bg-white p-3.5 shadow-[0_1px_1px_rgba(0,0,0,0.05)]">
      <div className="flex items-start gap-3">
        {icon}
        <h3 className="min-w-0 flex-1 text-base font-semibold leading-6 tracking-[0.08px] text-[#121212]">
          {title}
        </h3>
      </div>
      <div className="mt-2 flex flex-col items-end gap-2 text-right text-sm font-medium leading-5 tracking-[0.07px] text-[#454f5b]">
        {lines.map((line) => (
          <p key={line}>{line}</p>
        ))}
      </div>
    </article>
  );
}

function ActivityRow() {
  return (
    <article className="flex items-center gap-3 rounded-[14px] border-[0.8px] border-[#f2f2f2] bg-[#f3f3f4] p-2">
      <div className="flex self-stretch items-center justify-center p-2">
        <ClockIcon className="size-6 text-[#7a7a7a]" />
      </div>
      <div className="h-12 w-px bg-[#d9d9dd]" aria-hidden="true" />
      <div className="min-w-0 flex-1">
        <h3 className="text-lg font-medium leading-7 tracking-[0.09px] text-[#121212]">
          Team Meeting
        </h3>
        <p className="text-sm font-normal leading-5 tracking-[0.07px] text-[#4a4a4a]">
          Oct 26, 2026 <span className="mx-1">.</span> 10:00 AM
        </p>
      </div>
    </article>
  );
}

function TrainerDetailsModal({
  trainer,
  onClose,
}: {
  trainer: (typeof trainers)[number];
  onClose: () => void;
}) {
  return (
    <div
      className="fixed inset-0 z-50 flex justify-end bg-black/45 p-0 sm:p-0"
      role="presentation"
      onMouseDown={onClose}
    >
      <section
        role="dialog"
        aria-modal="true"
        aria-labelledby="trainer-details-title"
        className="flex h-screen w-full max-w-[512px] flex-col overflow-hidden rounded-none bg-white shadow-[0_25px_25px_rgba(0,0,0,0.25)] sm:m-0"
        onMouseDown={(event) => event.stopPropagation()}
      >
        <header className="flex h-[77px] shrink-0 items-center justify-between border-b border-[#f3f4f6] px-6 pb-px">
          <h2
            id="trainer-details-title"
            className="text-xl font-medium leading-7 tracking-[0.1px] text-[#101828]"
          >
            Member Details
          </h2>
          <button
            type="button"
            onClick={onClose}
            className="flex size-8 items-center justify-center rounded-full text-[#101828] transition-colors hover:bg-[#f7f7f7] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#f7869a]/30"
            aria-label="Close trainer details"
          >
            <CloseIcon className="size-6" />
          </button>
        </header>

        <div className="min-h-0 flex-1 overflow-y-auto px-6 py-4">
          <div className="flex flex-col gap-4">
            <div className="flex items-start gap-4">
              <div className="flex min-w-0 flex-1 items-center gap-4">
                <div className="size-24 shrink-0 rounded-full border-4 border-white bg-[#d1d6db] shadow-[0_4px_6px_-1px_rgba(0,0,0,0.1),0_2px_4px_-2px_rgba(0,0,0,0.1)]" />
                <div className="min-w-0 flex-1">
                  <h3 className="truncate text-2xl font-medium leading-8 tracking-[0.12px] text-[#121212]">
                    {trainer.name.replace("...", "")}
                  </h3>
                  <p className="text-lg font-normal leading-7 tracking-[0.09px] text-[#4a4a4a]">
                    User ID : {trainer.specialty}
                  </p>
                  <p className="text-lg font-normal leading-7 tracking-[0.09px] text-[#4a4a4a]">
                    Joined : Oct 24, 2023
                  </p>
                </div>
              </div>
              <span className="flex h-6 items-center justify-center rounded bg-[#22c55e]/10 px-2 text-base font-medium leading-6 tracking-[0.08px] text-[#16a34a]">
                Active
              </span>
            </div>

            <div className="border-t border-[#e0e0e0] pt-2">
              <div className="flex items-center gap-2">
                <ShieldIcon className="size-6 text-[#121212]" />
                <p className="text-sm font-normal leading-5 tracking-[0.07px] text-[#121212]">
                  Documents Provided
                </p>
              </div>
              <div className="mt-2 grid grid-cols-2 gap-2">
                <DocumentButton>ID Front</DocumentButton>
                <DocumentButton>ID Back</DocumentButton>
              </div>
            </div>

            <section className="flex flex-col gap-2">
              <h3 className="text-base font-medium leading-6 tracking-[0.08px] text-[#303030]">
                Personal Bio
              </h3>
              <div className="flex h-24 rounded-[18px] border border-[#e0e0e0] bg-white p-4 text-sm font-normal leading-5 tracking-[0.07px] text-[#7a7a7a]">
                e.g. NASM CPT
              </div>
            </section>

            <div className="grid grid-cols-2 gap-1.5">
              <InfoTile
                icon={<CalendarSolidIcon className="size-6 text-[#fb7185]" />}
                value="5"
                unit="yr"
                label="been an instructor"
              />
              <InfoTile
                icon={<DocumentNormalIcon className="size-6 text-[#fb7185]" />}
                value="Yoga"
                label="certifications/qualifications"
                valueBadge
              />
            </div>

            <TagPanel
              icon={<StretchIcon className="size-6 text-[#f7869a]" />}
              caption="physical fitness classes"
              tags={["Yoga"]}
            />

            <ContactCard
              icon={<ContactBookIcon className="size-6 text-[#f7869a]" />}
              title="Contact Info"
              lines={["(225) 555-0118", "Example@email.com"]}
            />
            <ContactCard
              icon={<LocationPinIcon className="size-6 text-[#f7869a]" />}
              title="Location"
              lines={["578 Boolean Ave, New York, NY, Turing St"]}
            />

            <section className="flex flex-col gap-3">
              <div className="border-b border-[#e0e0e0] pb-px">
                <h3 className="px-3.5 py-3 text-lg font-medium leading-7 tracking-[0.09px] text-[#4a4a4a]">
                  Recent Activity
                </h3>
              </div>
              <ActivityRow />
              <ActivityRow />
            </section>
          </div>
        </div>

        <footer className="shrink-0 bg-white px-6 pb-4 pt-2">
          <button
            type="button"
            className="flex h-12 w-full items-center justify-center rounded-lg border border-[#d32f2f] bg-[#fee2e2] px-6 py-3 text-base font-medium leading-6 tracking-[0.08px] text-[#121212] shadow-[0_0_0_0_rgba(247,134,154,0.3)] transition-colors hover:bg-[#fbd4d4] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#f7869a]/30"
          >
            Suspend User
          </button>
        </footer>
      </section>
    </div>
  );
}

function TrainerSection({
  onOpenTrainerDetails,
}: {
  onOpenTrainerDetails: (trainer: (typeof trainers)[number]) => void;
}) {
  return (
    <section
      id="trainers"
      aria-labelledby="trainers-title"
      className="min-h-0 flex-1"
    >
      <h1 id="trainers-title" className="sr-only">
        Trainers
      </h1>
      <Card className="flex h-full min-h-0 flex-col overflow-hidden rounded-lg border-[#c4cdd5] bg-white shadow-none">
        <div className="min-h-0 flex-1 overflow-hidden">
          <table className="w-full min-w-[980px] border-collapse text-left font-['Public_Sans',Arial,sans-serif]">
            <thead>
              <tr className="h-[52px] bg-white text-sm font-semibold leading-[22px] tracking-[0.22px] text-[#1c252e]">
                <MemberHeader className="w-[30%]">Trainer</MemberHeader>
                <MemberHeader className="w-[19%]">Specialties</MemberHeader>
                <MemberHeader className="w-[12%]">Class</MemberHeader>
                <MemberHeader className="w-[18%]">Status</MemberHeader>
                <MemberHeader className="w-[13%]">Rating</MemberHeader>
                <MemberHeader className="w-[8%] text-right">Actions</MemberHeader>
              </tr>
            </thead>
            <tbody>
              {trainers.map((trainer, index) => (
                <tr key={`${trainer.name}-${index}`} className="h-[52px]">
                  <td className="border-b border-dashed border-[#c4cdd5] px-3 py-2">
                    <div className="flex min-w-0 items-center gap-3">
                      <Image
                        src="/figma-assets/trainer-avatar.png"
                        alt=""
                        width={32}
                        height={32}
                        className="size-8 rounded-full object-cover"
                      />
                      <div className="min-w-0">
                        <p className="truncate text-sm font-normal leading-[22px] tracking-[0.22px] text-[#1c252e]">
                          {trainer.name}
                        </p>
                        <p className="truncate text-xs font-normal leading-[18px] tracking-[0.18px] text-[#454f5b]">
                          {trainer.user}
                        </p>
                      </div>
                    </div>
                  </td>
                  <td className="border-b border-dashed border-[#c4cdd5] px-3 py-2 text-sm leading-[22px] tracking-[0.22px] text-[#1c252e]">
                    {trainer.specialty}
                  </td>
                  <td className="border-b border-dashed border-[#c4cdd5] px-3 py-2 text-sm leading-[22px] tracking-[0.22px] text-[#1c252e]">
                    {trainer.classes}
                  </td>
                  <td className="border-b border-dashed border-[#c4cdd5] px-3 py-2">
                    <StatusBadge status={trainer.status} />
                  </td>
                  <td className="border-b border-dashed border-[#c4cdd5] px-3 py-2 text-sm leading-[22px] tracking-[0.22px] text-[#1c252e]">
                    {trainer.rating}
                  </td>
                  <td className="border-b border-dashed border-[#c4cdd5] px-3 py-2 text-right">
                    <button
                      type="button"
                      onClick={() => onOpenTrainerDetails(trainer)}
                      className="inline-flex size-8 items-center justify-center rounded-md text-[#454f5b] hover:bg-[#f7f7f7] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#f7869a]/30"
                      aria-label={`Open actions for ${trainer.name}`}
                    >
                      <KebabIcon className="size-5" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <TablePagination />
      </Card>
    </section>
  );
}

function VerificationSection() {
  const [filter, setFilter] = useState<"members" | "trainers">("members");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const list = filter === "members" ? pendingApprovals.members : pendingApprovals.trainers;

  return (
    <div className="flex flex-col gap-6 min-h-0 flex-1 overflow-hidden">
      <Card className="flex min-h-24 items-center rounded-2xl border-[#f2f2f2] bg-white p-[17px] shadow-[0_1px_3px_rgba(0,0,0,0.1),0_1px_2px_-1px_rgba(0,0,0,0.1)]">
        <div className="flex w-full items-center gap-4">
          <span className="flex size-11 shrink-0 items-center justify-center rounded-full bg-[linear-gradient(91deg,#f7869a_2%,#fbc3cc_100%)] text-white">
            <CheckIcon className="size-6" />
          </span>
          <div className="min-w-0 flex-1">
            <h2 className="text-2xl font-medium leading-8 tracking-[0.12px] text-[#1e293b]">
              Verifications
            </h2>
            <p className="truncate text-lg font-normal leading-7 tracking-[0.09px] text-[#4a4a4a]">
              Nice work! You&apos;re currently averaging a 12-hour turnaround
              time this week.
            </p>
          </div>
          <div className="relative">
            <button
              type="button"
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="flex h-12 shrink-0 items-center justify-center gap-2 rounded-lg border border-[#f2f2f2] bg-[linear-gradient(141deg,#e06f83_11%,#f093a3_32%,#e06f83_53%)] px-6 py-3 text-base font-medium leading-6 tracking-[0.08px] text-white shadow-[0_0_0_0_rgba(247,134,154,0.3)] transition-shadow hover:shadow-[0_0_0_2px_rgba(247,134,154,0.3)] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#f7869a]/30"
            >
              <FilterIcon className="size-6" />
              Filter: {filter === "members" ? "Members" : "Trainers"}
            </button>
            {isDropdownOpen && (
              <div className="absolute right-0 top-full z-20 mt-2 w-48 rounded-lg border border-[#e0e0e0] bg-white p-1 shadow-lg ring-1 ring-black/5">
                <button
                  onClick={() => {
                    setFilter("members");
                    setIsDropdownOpen(false);
                  }}
                  className={cn(
                    "flex w-full items-center px-3 py-2 text-sm rounded-md transition-colors font-medium",
                    filter === "members" ? "bg-[#fdf2f4] text-[#f7869a]" : "text-[#4a4a4a] hover:bg-[#f7f7f7]"
                  )}
                >
                  Members
                </button>
                <button
                  onClick={() => {
                    setFilter("trainers");
                    setIsDropdownOpen(false);
                  }}
                  className={cn(
                    "flex w-full items-center px-3 py-2 text-sm rounded-md transition-colors font-medium",
                    filter === "trainers" ? "bg-[#fdf2f4] text-[#f7869a]" : "text-[#4a4a4a] hover:bg-[#f7f7f7]"
                  )}
                >
                  Trainers
                </button>
              </div>
            )}
          </div>
        </div>
      </Card>
      <div className="min-h-0 flex-1 overflow-y-auto">
        <section
          aria-label="Pending verification requests"
          className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
        >
          {list.map((request, index) => (
            <VerificationCard key={`${request.id}-${index}`} request={request} />
          ))}
        </section>
      </div>
    </div>
  );
}

function VerificationCard({
  request,
}: {
  request: any;
}) {
  return (
    <Card className="w-full rounded-2xl border-[#f2f2f2] bg-white p-5 shadow-[0_4px_10px_rgba(0,0,0,0.03)] transition-shadow hover:shadow-md">
      <div className="flex items-start">
        <div className="flex min-w-0 flex-1 items-center gap-3">
          <Image
            src={request.type === "Member" ? "/figma-assets/member-avatar.png" : "/figma-assets/trainer-avatar.png"}
            alt=""
            width={48}
            height={48}
            className="size-12 rounded-full border-2 border-[#f8fafc] object-cover"
          />
          <div className="min-w-0">
            <h3 className="truncate text-base font-semibold leading-6 tracking-[0.08px] text-[#121212]">
              {request.name}
            </h3>
            <p className="text-xs font-normal leading-4 tracking-[0.06px] text-[#4a4a4a]">
              {request.id}
            </p>
          </div>
        </div>
        <span className="flex h-6 shrink-0 items-center justify-center rounded bg-[#fef3c7] px-2 py-0.5 font-['Public_Sans',Arial,sans-serif] text-sm font-semibold leading-[22px] tracking-[0.22px] text-[#d97706]">
          Pending
        </span>
      </div>

      <div className="mt-[13px] flex flex-col gap-3 rounded-xl border-[0.5px] border-[#f2f2f2] bg-[#f7f7f7] p-3">
        <VerificationDetail label="Request Type" value={request.type} />
        <VerificationDetail label="Submitted" value={request.submitted} />
        <div className="flex flex-col gap-2 border-t border-[#e0e0e0] py-2">
          <div className="flex items-center gap-2">
            <ShieldIcon className="size-6 text-[#121212]" />
            <p className="text-sm font-normal leading-5 tracking-[0.07px] text-[#121212]">
              Documents Provided
            </p>
          </div>
          <div className="grid grid-cols-2 gap-2">
            <button
              type="button"
              className="flex h-[43px] items-center justify-center rounded-lg bg-[#fdf2f4] p-3.5 text-[10px] font-medium leading-[15px] text-[#64748b] transition-colors hover:bg-[#f9e8ec] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#f7869a]/30"
            >
              ID Front
            </button>
            <button
              type="button"
              className="flex h-[43px] items-center justify-center rounded-lg bg-[#fdf2f4] p-3.5 text-[10px] font-medium leading-[15px] text-[#64748b] transition-colors hover:bg-[#f9e8ec] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#f7869a]/30"
            >
              ID Back
            </button>
          </div>
        </div>
      </div>

      <div className="mt-[7px] grid grid-cols-2 gap-2">
        <button
          type="button"
          className="flex h-12 items-center justify-center gap-2 rounded-lg bg-[#dcfce7] px-6 py-3 text-sm font-semibold leading-6 tracking-[0.08px] text-[#16a34a] transition-colors hover:bg-[#c9f7d9] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#16a34a]/20"
        >
          <CheckIcon className="size-5" />
          Approve
        </button>
        <button
          type="button"
          className="flex h-12 items-center justify-center gap-2 rounded-lg bg-[#fee2e2] px-6 py-3 text-sm font-semibold leading-6 tracking-[0.08px] text-[#dc2626] transition-colors hover:bg-[#fbd4d4] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#dc2626]/20"
          aria-label={`Reject ${request.name}`}
        >
          <CheckIcon className="size-5" />
          Reject
        </button>
      </div>
    </Card>
  );
}

function VerificationDetail({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center justify-between gap-4 text-base leading-6 tracking-[0.08px]">
      <p className="font-normal text-[#4a4a4a]">{label}</p>
      <p className="font-medium text-[#121212]">{value}</p>
    </div>
  );
}

function TransactionsSection() {
  return (
    <section
      id="transactions"
      aria-labelledby="transactions-title"
      className="min-h-0 flex-1"
    >
      <Card className="flex h-full min-h-0 flex-col gap-[14px] overflow-hidden rounded-[14px] border-[#e3e6f0] bg-white px-3 py-3.5 shadow-none">
        <div className="flex shrink-0 items-center gap-2.5">
          <div className="min-w-0 flex-1">
            <h1
              id="transactions-title"
              className="text-2xl font-medium leading-8 tracking-[0.12px] text-[#1e293b]"
            >
              Transactions
            </h1>
            <p className="text-lg font-normal leading-7 tracking-[0.09px] text-[#4a4a4a]">
              Financial overview and history.
            </p>
          </div>

          <button
            type="button"
            className="flex h-12 shrink-0 items-center justify-center gap-2 rounded-lg bg-black px-6 py-3 text-base font-medium leading-6 tracking-[0.08px] text-white transition-shadow hover:shadow-[0_0_0_2px_rgba(247,134,154,0.3)] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#f7869a]/30"
          >
            <DocumentDownloadIcon className="size-6" />
            Export CSV
          </button>

          <button
            type="button"
            className="flex h-12 shrink-0 items-center justify-center gap-2 rounded-lg border border-[#f2f2f2] bg-[linear-gradient(141deg,#e06f83_11%,#f093a3_32%,#e06f83_53%)] px-6 py-3 text-base font-medium leading-6 tracking-[0.08px] text-white transition-shadow hover:shadow-[0_0_0_2px_rgba(247,134,154,0.3)] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#f7869a]/30"
          >
            <TuneIcon className="size-6" />
            Filter
          </button>
        </div>

        <div className="flex min-h-0 flex-1 flex-col overflow-hidden rounded-lg border border-[#c4cdd5]">
          <div className="min-h-0 flex-1 overflow-auto">
            <table className="w-full min-w-[1080px] border-collapse text-left">
              <thead className="sticky top-0 z-10">
                <tr className="h-[55px] bg-[#f7f7f7] text-sm font-semibold leading-5 tracking-[0.07px] text-[#4a4a4a]">
                  {["Transaction ID", "Date", "Pay By", "Amount", "Fee", "Trainer get", "Actions"].map((heading) => (
                    <th
                      key={heading}
                      className="border-b border-[#e0e0e0] px-0 py-2 first:[&>div]:border-l-0"
                    >
                      <div className="flex h-6 items-center border-l border-[#c4cdd5] px-3">
                        <span className="truncate">{heading}</span>
                      </div>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="font-['Public_Sans',Arial,sans-serif]">
                {transactions.map((transaction, index) => (
                  <tr key={`${transaction.id}-${transaction.date}-${index}`} className="h-[52px] bg-white">
                    <TransactionCell>{transaction.id}</TransactionCell>
                    <TransactionCell className="font-sans tracking-[0.07px]">{transaction.date}</TransactionCell>
                    <td className="border-b border-dashed border-[#c4cdd5] px-3 py-2">
                      <div className="flex min-w-0 flex-col justify-center">
                        <p className="truncate text-sm font-normal leading-[22px] tracking-[0.22px] text-[#1c252e]">
                          {transaction.payBy}
                        </p>
                        <p className="truncate text-xs font-normal leading-[18px] tracking-[0.18px] text-[#454f5b]">
                          {transaction.payBySub}
                        </p>
                      </div>
                    </td>
                    <TransactionCell>{transaction.amount}</TransactionCell>
                    <TransactionCell>{transaction.fee}</TransactionCell>
                    <TransactionCell>{transaction.trainerGet}</TransactionCell>
                    <td className="border-b border-dashed border-[#c4cdd5] px-3 py-2">
                      <TransactionStatusBadge status={transaction.status} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <TablePagination />
        </div>
      </Card>
    </section>
  );
}

function TransactionCell({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <td
      className={cn(
        "border-b border-dashed border-[#c4cdd5] px-3 py-2 text-sm font-normal leading-[22px] tracking-[0.22px] text-[#1c252e]",
        className,
      )}
    >
      <span className="block truncate">{children}</span>
    </td>
  );
}

function TransactionStatusBadge({ status }: { status: string }) {
  const styles =
    status === "Completed"
      ? "bg-[#dcfce7] text-[#00a76f]"
      : status === "Processing"
        ? "bg-[#fef3c7] text-[#f59e0b]"
        : "bg-[#dcfce7] text-[#00a76f]";

  return (
    <span
      className={cn(
        "inline-flex h-6 items-center justify-center rounded px-2 font-['Public_Sans',Arial,sans-serif] text-sm font-semibold leading-[22px] tracking-[0.22px]",
        styles,
      )}
    >
      {status}
    </span>
  );
}

function SupportSection() {
  return (
    <section
      id="support"
      aria-labelledby="support-title"
      className="min-h-0 flex-1 overflow-hidden"
    >
      <Card className="flex h-full min-h-0 flex-col gap-3 overflow-hidden rounded-xl border-[#d6e6f2] bg-white p-3.5 shadow-none">
        <div className="flex shrink-0 items-center gap-2.5 px-2.5">
          <h1
            id="support-title"
            className="min-w-0 flex-1 text-xl font-semibold leading-7 tracking-[0.1px] text-[#0f172a]"
          >
            Member
          </h1>
          <button
            type="button"
            className="flex h-12 shrink-0 items-center justify-center gap-2 rounded-lg border border-[#f2f2f2] bg-[linear-gradient(141deg,#e06f83_11%,#f093a3_32%,#e06f83_53%)] px-6 py-3 text-base font-medium leading-6 tracking-[0.08px] text-white shadow-[0_0_0_0_rgba(247,134,154,0.3)] transition-shadow hover:shadow-[0_0_0_2px_rgba(247,134,154,0.3)] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#f7869a]/30"
          >
            <TuneIcon className="size-6" />
            Filter
          </button>
        </div>

        <div className="min-h-0 flex-1 overflow-auto rounded-xl border border-[#fdf2f4] p-2">
          <div className="flex min-w-[840px] flex-col gap-3">
            {supportTickets.map((ticket, index) => (
              <SupportTicketCard key={`${ticket.status}-${index}`} ticket={ticket} />
            ))}
          </div>
        </div>
      </Card>
    </section>
  );
}

function SupportTicketCard({
  ticket,
}: {
  ticket: (typeof supportTickets)[number];
}) {
  return (
    <article className="rounded-xl border border-[#e2e8f0] bg-white p-3">
      <div className={cn("flex flex-col gap-3", ticket.expanded ? "pb-3" : "")}>
        <div className="flex items-center gap-3">
          <div className="flex min-w-0 flex-1 items-center gap-3">
            <span className="shrink-0 text-sm font-normal leading-5 tracking-[0.07px] text-[#4a4a68]">
              {ticket.id}
            </span>
            <SupportStatusBadge status={ticket.status} />
          </div>
          {ticket.replies ? (
            <span className="inline-flex h-[30px] shrink-0 items-center justify-center rounded-[10px] border border-[#d6e6f2] bg-[#eaf4fb] px-[13px] text-sm font-medium leading-5 tracking-[0.07px] text-[#33358e]">
              {ticket.replies}
            </span>
          ) : null}
          <button
            type="button"
            className="flex size-6 shrink-0 items-center justify-center rounded-md text-[#33358e] hover:bg-[#f7f7f7] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#f7869a]/30"
            aria-label={ticket.expanded ? "Collapse support ticket" : "Expand support ticket"}
          >
            {ticket.expanded ? (
              <ChevronUpIcon className="size-6" />
            ) : (
              <ChevronDownIcon className="size-6" />
            )}
          </button>
        </div>

        <h2 className="text-lg font-medium leading-7 tracking-[0.09px] text-[#0f172a]">
          {ticket.title}
        </h2>
        <div className="flex items-center gap-2">
          <span className="size-2.5 rounded-full bg-[#d9d9d9]" aria-hidden="true" />
          <span className="text-sm font-medium leading-5 tracking-[0.07px] text-[#4a4a4a]">
            {ticket.date}
          </span>
        </div>
      </div>

      {ticket.expanded ? (
        <div className="border-t border-[#e9eef4] pt-4">
          <div className="flex flex-col gap-4">
            {ticket.comments.map((comment, index) => (
              <SupportComment key={`${comment.author}-${index}`} comment={comment} />
            ))}
            {ticket.replyBox ? <SupportReplyBox /> : null}
            {ticket.resolved ? <SupportResolvedAlert /> : null}
          </div>
        </div>
      ) : null}
    </article>
  );
}

function SupportStatusBadge({ status }: { status: string }) {
  const styles =
    status === "New"
      ? "bg-[#ace3ff] text-[#006599]"
      : status === "In Progress"
        ? "bg-[#fef3c7] text-[#f59e0b]"
        : "bg-[#dcfce7] text-[#16a34a]";

  return (
    <span
      className={cn(
        "inline-flex h-8 items-center rounded-lg px-2 text-sm font-semibold leading-5 tracking-[0.07px] shadow-[0_1px_1px_rgba(0,0,0,0.05)]",
        styles,
      )}
    >
      {status}
    </span>
  );
}

function SupportComment({
  comment,
}: {
  comment: (typeof supportTickets)[number]["comments"][number];
}) {
  return (
    <div
      className={cn(
        "flex flex-col gap-3 rounded-lg border px-4 py-4",
        comment.tone === "reply"
          ? "border-[#e0e0e0] bg-[#fdf2f4]"
          : "border-[#f2f2f2] bg-[#f7f7f7]",
      )}
    >
      <div className="flex items-center gap-3">
        <div className="flex items-center gap-3">
          <span className="flex size-8 items-center justify-center rounded-full bg-[#1d4ed8] font-['Public_Sans',Arial,sans-serif] text-sm leading-[22px] tracking-[0.22px] text-white">
            {comment.initial}
          </span>
          <span className="text-sm font-medium leading-5 tracking-[0.07px] text-[#121212]">
            {comment.author}
          </span>
        </div>
        <span className="text-sm font-medium leading-5 tracking-[0.07px] text-[#4a4a4a]">
          {comment.date}
        </span>
      </div>
      <p className="text-sm font-normal leading-5 tracking-[0.07px] text-[#344056]">
        {comment.body}
      </p>
    </div>
  );
}

function SupportReplyBox() {
  return (
    <div className="overflow-hidden rounded-lg">
      <textarea
        aria-label="Reply"
        placeholder="Type your reply..."
        className="block h-[99px] w-full resize-none border border-[#e9eef4] bg-[#f1f5fa] px-4 py-3 text-sm font-normal leading-5 tracking-[0.07px] text-[#0f172a] outline-none placeholder:text-[#4a4a68] focus:border-[#f7869a]"
      />
      <div className="flex items-center justify-between border-x border-b border-[#e9eef4] bg-[#f8f8ff] px-2 py-2.5">
        <button
          type="button"
          className="flex h-12 items-center justify-center gap-2 rounded-lg bg-[#16a34a] px-6 py-3 text-base font-medium leading-6 tracking-[0.08px] text-white hover:bg-[#15803d] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#16a34a]/20"
        >
          <ClipboardTextIcon className="size-6" />
          Resolved
        </button>
        <button
          type="button"
          className="flex h-12 items-center justify-center gap-2 rounded-lg bg-black px-6 py-3 text-base font-medium leading-6 tracking-[0.08px] text-white hover:bg-[#242424] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#f7869a]/30"
        >
          <SendIcon className="size-6" />
          Send Replay
        </button>
      </div>
    </div>
  );
}

function SupportResolvedAlert() {
  return (
    <div className="flex h-[50px] items-center gap-4 rounded-lg bg-[#dcfce7] px-3 py-3 shadow-[0_1px_3px_rgba(0,0,0,0.1),0_1px_2px_-1px_rgba(0,0,0,0.1)]">
      <InfoCircleIcon className="size-6 shrink-0 text-[#16a34a]" />
      <p className="min-w-0 flex-1 text-sm font-medium leading-5 tracking-[0.07px] text-[#16a34a]">
        This ticket has been resolved
      </p>
      <button
        type="button"
        className="flex h-[30px] shrink-0 items-center justify-center rounded-lg bg-[#f1f5fa] px-3 text-sm font-semibold leading-5 tracking-[0.07px] text-[#0f172a] shadow-[0_1px_3px_rgba(0,0,0,0.1),0_1px_2px_-1px_rgba(0,0,0,0.1)] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#16a34a]/20"
      >
        Reopen
      </button>
    </div>
  );
}

function SettingsSection() {
  const [settingsTab, setSettingsTab] = useState<"profile" | "password">("profile");

  return (
    <section
      id="settings-panel"
      aria-labelledby="settings-title"
      className="grid min-h-0 flex-1 grid-cols-[102px_minmax(0,1fr)] overflow-hidden"
    >
      <aside
        className="border-r border-[#f2f2f2] bg-white px-[31px] py-4"
        aria-label="Settings menu"
      >
        <h1
          id="settings-title"
          className="px-2 text-xs font-medium leading-4 text-[#121212]"
        >
          Setting
        </h1>
        <div className="mt-2 flex flex-col gap-2">
          <SettingsIconButton
            label="Profile information"
            active={settingsTab === "profile"}
            onClick={() => setSettingsTab("profile")}
          >
            <ProfileCircleIcon className="size-6" />
          </SettingsIconButton>
          <SettingsIconButton
            label="Change password"
            active={settingsTab === "password"}
            onClick={() => setSettingsTab("password")}
          >
            <PasswordCheckIcon className="size-6" />
          </SettingsIconButton>
          <SettingsIconButton
            label="Account profile"
            active={false}
            onClick={() => setSettingsTab("profile")}
          >
            <ProfileCircleIcon className="size-6" />
          </SettingsIconButton>
        </div>
      </aside>

      <div className="min-h-0 overflow-auto pl-6 pr-0">
        {settingsTab === "profile" ? <ProfileSettingsPanel /> : null}
        {settingsTab === "password" ? <PasswordSettingsPanel /> : null}
      </div>
    </section>
  );
}

function SettingsIconButton({
  active,
  children,
  label,
  onClick,
}: {
  active: boolean;
  children: React.ReactNode;
  label: string;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      className={cn(
        "flex size-12 items-center justify-center rounded-lg transition-colors focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#f7869a]/30",
        active
          ? "bg-[#fdf2f4] text-[#e06f83]"
          : "text-[#4a4a4a] hover:bg-[#f7f7f7] hover:text-[#e06f83]",
      )}
      aria-label={label}
      title={label}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

function ProfileSettingsPanel() {
  return (
    <SettingsPanel
      icon={<ProfileCircleIcon className="size-6 text-[#e06f83]" />}
      title="Profile Information"
      actionLabel="Save Profile Change"
    >
      <div className="rounded-lg bg-white p-3">
        <SettingsField label="Full Name" placeholder="Example" />
        <div className="mt-3.5 grid gap-3.5 md:grid-cols-2">
          <SettingsField label="Email Address" placeholder="Example@email.com" type="email" />
          <SettingsField label="Phone Number" placeholder="Example123" type="tel" />
        </div>
      </div>
    </SettingsPanel>
  );
}

function PasswordSettingsPanel() {
  return (
    <SettingsPanel
      icon={<PasswordCheckIcon className="size-6 text-[#e06f83]" />}
      title="Change Your Password"
      actionLabel="Update Password"
    >
      <div className="rounded-lg bg-white p-3">
        <div className="flex flex-col gap-3.5">
          <SettingsField label="Current Password" placeholder="Enter current password" type="password" />
          <SettingsField label="New Password" placeholder="Create a new secure password" type="password" />
          <SettingsField label="Confirm Password" placeholder="Re-enter new password to confirm" type="password" />
        </div>
      </div>
    </SettingsPanel>
  );
}

function SettingsPanel({
  actionLabel,
  children,
  icon,
  title,
}: {
  actionLabel: string;
  children: React.ReactNode;
  icon: React.ReactNode;
  title: string;
}) {
  return (
    <Card className="flex w-full flex-col gap-[18px] rounded-[14px] border-[#e0e0e0] bg-[#fdf2f4] px-3 py-3.5 shadow-none">
      <div className="flex min-h-12 items-center gap-5">
        <div className="flex min-w-0 flex-1 items-center gap-2.5">
          {icon}
          <h2 className="min-w-0 flex-1 text-xl font-semibold leading-7 tracking-[0.1px] text-black">
            {title}
          </h2>
        </div>
        <button
          type="button"
          className="flex h-12 shrink-0 items-center justify-center rounded-lg border border-[#f2f2f2] bg-[linear-gradient(151deg,#e06f83_11%,#f093a3_32%,#e06f83_53%)] px-6 py-3 text-base font-medium leading-6 tracking-[0.08px] text-white transition-shadow hover:shadow-[0_0_0_2px_rgba(247,134,154,0.3)] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#f7869a]/30"
        >
          {actionLabel}
        </button>
      </div>
      {children}
    </Card>
  );
}

function SettingsField({
  label,
  placeholder,
  type = "text",
}: {
  label: string;
  placeholder: string;
  type?: React.HTMLInputTypeAttribute;
}) {
  return (
    <label className="flex flex-col gap-2">
      <span className="text-base font-medium leading-6 tracking-[0.08px] text-[#121212]">
        {label}
      </span>
      <input
        type={type}
        placeholder={placeholder}
        className="h-12 rounded-lg border border-[#cbd5ed] bg-white px-4 py-3 text-base font-normal leading-6 tracking-[0.08px] text-[#121212] outline-none placeholder:text-[#7a7a7a] focus:border-[#f7869a] focus:ring-4 focus:ring-[#f7869a]/15"
      />
    </label>
  );
}

function ComingSoonSection({ section }: { section: DashboardSection }) {
  const title =
    section === "trainers"
      ? "Trainer"
      : section === "verification"
        ? "Verification"
        : section === "transactions"
          ? "Transactions"
          : section === "support"
            ? "Support"
            : "Settings";

  return (
    <section
      id={`${section}-panel`}
      aria-labelledby={`${section}-title`}
      className="flex min-h-[520px] items-center justify-center rounded-lg border border-dashed border-[#c4cdd5] bg-white"
    >
      <h1 id={`${section}-title`} className="text-xl font-medium text-[#454f5b]">
        {title} section coming next
      </h1>
    </section>
  );
}

function TablePagination() {
  return (
    <div className="flex h-16 items-center justify-end gap-4 bg-white px-3 py-2 font-['Public_Sans',Arial,sans-serif] text-sm leading-[22px] tracking-[0.22px] text-[#1c252e]">
      <div className="flex items-center gap-2">
        <span>Rows per page:</span>
        <button
          type="button"
          className="flex items-center gap-1 rounded-md px-1 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#f7869a]/30"
          aria-label="Rows per page, 10"
        >
          10 <ChevronDownSmallIcon className="size-4" />
        </button>
      </div>
      <div className="flex items-center gap-2">
        <span>1-10</span>
        <span>of</span>
        <span>20</span>
      </div>
      <button
        type="button"
        className="flex size-6 items-center justify-center rounded-md text-[#454f5b] hover:bg-[#f7f7f7] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#f7869a]/30"
        aria-label="Previous page"
      >
        <ChevronLeftIcon className="size-5" />
      </button>
      <button
        type="button"
        className="flex size-6 items-center justify-center rounded-md text-[#454f5b] hover:bg-[#f7f7f7] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#f7869a]/30"
        aria-label="Next page"
      >
        <ChevronRightIcon className="size-5" />
      </button>
    </div>
  );
}

function MemberHeader({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <th className={cn("border-b border-[#c4cdd5] px-3 py-2", className)}>
      <div className="border-r border-[#c4cdd5] last:border-r-0">{children}</div>
    </th>
  );
}

function StatusBadge({ status }: { status: string }) {
  const styles =
    status === "Active"
      ? "bg-[#dcfce7] text-[#16a34a]"
      : status === "Suspended"
        ? "bg-[#fee2e2] text-[#dc2626]"
        : "bg-[#f2f2f2] text-[#7a7a7a]";

  return (
    <span
      className={cn(
        "inline-flex h-6 items-center justify-center rounded px-2 text-sm font-semibold leading-[22px] tracking-[0.22px]",
        styles,
      )}
    >
      {status}
    </span>
  );
}

type IconComponent = (props: { className?: string; active?: boolean }) => React.ReactElement;

function OverviewIcon({ className, active }: { className?: string; active?: boolean }) {
  if (active) {
    return (
      <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
        <path d="M11 19.9V4.1C11 2.6 10.36 2 8.77 2H4.73C3.14 2 2.5 2.6 2.5 4.1V19.9C2.5 21.4 3.14 22 4.73 22H8.77C10.36 22 11 21.4 11 19.9Z" fill="white" />
        <path d="M21.5 10.9V4.1C21.5 2.6 20.86 2 19.27 2H15.23C13.64 2 13 2.6 13 4.1V10.9C13 12.4 13.64 13 15.23 13H19.27C20.86 13 21.5 12.4 21.5 10.9Z" fill="white" />
        <path d="M21.5 19.9V17.1C21.5 15.6 20.86 15 19.27 15H15.23C13.64 15 13 15.6 13 17.1V19.9C13 21.4 13.64 22 15.23 22H19.27C20.86 22 21.5 21.4 21.5 19.9Z" fill="white" />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path d="M4.73047 2.5H8.76953C9.52094 2.5 9.91957 2.64547 10.1387 2.85156C10.3501 3.05042 10.4999 3.40644 10.5 4.09961V19.9004C10.4999 20.5936 10.3501 20.9496 10.1387 21.1484C9.91957 21.3545 9.52094 21.5 8.76953 21.5H4.73047C3.97906 21.5 3.58043 21.3545 3.36133 21.1484C3.14995 20.9496 3.00006 20.5936 3 19.9004V4.09961C3.00006 3.40644 3.14995 3.05042 3.36133 2.85156C3.58043 2.64547 3.97906 2.5 4.73047 2.5Z" fill="white" stroke="currentColor" strokeWidth="1.5" />
      <path d="M15.2305 2.5H19.2695C20.0209 2.5 20.4196 2.64547 20.6387 2.85156C20.8501 3.05042 20.9999 3.40644 21 4.09961V10.9004C20.9999 11.5936 20.8501 11.9496 20.6387 12.1484C20.4196 12.3545 20.0209 12.5 19.2695 12.5H15.2305C14.4791 12.5 14.0804 12.3545 13.8613 12.1484C13.6499 11.9496 13.5001 11.5936 13.5 10.9004V4.09961C13.5001 3.40644 13.6499 3.05042 13.8613 2.85156C14.0804 2.64547 14.4791 2.5 15.2305 2.5Z" fill="white" stroke="currentColor" strokeWidth="1.5" />
      <path d="M15.2305 15.5H19.2695C20.0209 15.5 20.4196 15.6455 20.6387 15.8516C20.8501 16.0504 20.9999 16.4064 21 17.0996V19.9004C20.9999 20.5936 20.8501 20.9496 20.6387 21.1484C20.4196 21.3545 20.0209 21.5 19.2695 21.5H15.2305C14.4791 21.5 14.0804 21.3545 13.8613 21.1484C13.6499 20.9496 13.5001 20.5936 13.5 19.9004V17.0996L13.5068 16.8555C13.5384 16.32 13.6763 16.0256 13.8613 15.8516C14.0804 15.6455 14.4791 15.5 15.2305 15.5Z" fill="white" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

function MembersIcon({ className, active }: { className?: string; active?: boolean }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path
        d="M9.16055 10.87C9.06055 10.86 8.94055 10.86 8.83055 10.87C6.45055 10.79 4.56055 8.84 4.56055 6.44C4.56055 3.99 6.54055 2 9.00055 2C11.4505 2 13.4405 3.99 13.4405 6.44C13.4305 8.84 11.5405 10.79 9.16055 10.87Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M16.4093 4C18.3493 4 19.9093 5.57 19.9093 7.5C19.9093 9.39 18.4093 10.93 16.5393 11C16.4593 10.99 16.3693 10.99 16.2793 11"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M4.1607 14.56C1.7407 16.18 1.7407 18.82 4.1607 20.43C6.9107 22.27 11.4207 22.27 14.1707 20.43C16.5907 18.81 16.5907 16.17 14.1707 14.56C11.4307 12.73 6.9207 12.73 4.1607 14.56Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M18.3398 20C19.0598 19.85 19.7398 19.56 20.2998 19.13C21.8598 17.96 21.8598 16.03 20.2998 14.86C19.7498 14.44 19.0798 14.16 18.3698 14"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function TrainerIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path d="M6 14 14 6M4 12l8 8M12 4l8 8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      <path d="m3 15 6 6M15 3l6 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

function ShieldIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path d="M12 3 5 6v5.5c0 4.4 2.8 7.7 7 9.5 4.2-1.8 7-5.1 7-9.5V6l-7-3Z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
      <path d="m9 12 2 2 4-4" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function CardIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <rect x="3" y="5" width="18" height="14" rx="2.5" stroke="currentColor" strokeWidth="1.7" />
      <path d="M3 10h18M7 15h3" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
    </svg>
  );
}

function ProfileCircleIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <circle cx="12" cy="12" r="9" fill="currentColor" opacity="0.16" />
      <path d="M12 12.4a3.2 3.2 0 1 0 0-6.4 3.2 3.2 0 0 0 0 6.4Z" fill="currentColor" opacity="0.9" />
      <path d="M6.8 18.2c.9-2.3 2.7-3.5 5.2-3.5s4.3 1.2 5.2 3.5" fill="currentColor" opacity="0.9" />
    </svg>
  );
}

function PasswordCheckIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <rect x="4" y="9" width="16" height="11" rx="3" fill="currentColor" opacity="0.16" />
      <path d="M8 9V7.6C8 5.1 9.5 3.5 12 3.5s4 1.6 4 4.1V9" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
      <path d="m9.4 14.7 1.8 1.8 3.6-4" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function SupportIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M18 2H6C4.34 2 3 3.33 3 4.97V15.88C3 17.52 4.34 18.85 6 18.85H6.76C7.56 18.85 8.32 19.16 8.88 19.72L10.59 21.41C11.37 22.18 12.64 22.18 13.42 21.41L15.13 19.72C15.69 19.16 16.46 18.85 17.25 18.85H18C19.66 18.85 21 17.52 21 15.88V4.97C21 3.33 19.66 2 18 2ZM10.38 13.01C10.79 13.01 11.13 13.35 11.13 13.76C11.13 14.17 10.79 14.51 10.38 14.51H7.7C7.26 14.51 6.85 14.3 6.59 13.94C6.34 13.6 6.28 13.18 6.4 12.78C6.75 11.71 7.61 11.13 8.37 10.61C9.17 10.07 9.62 9.73 9.62 9.15C9.62 8.63 9.2 8.21 8.68 8.21C8.16 8.21 7.75 8.64 7.75 9.16C7.75 9.57 7.41 9.91 7 9.91C6.59 9.91 6.25 9.57 6.25 9.16C6.25 7.82 7.34 6.72 8.69 6.72C10.04 6.72 11.13 7.81 11.13 9.16C11.13 10.57 10.07 11.29 9.22 11.87C8.69 12.23 8.19 12.57 7.94 13.02H10.38V13.01ZM17 13.08H16.79V13.77C16.79 14.18 16.45 14.52 16.04 14.52C15.63 14.52 15.29 14.18 15.29 13.77V13.08H13.33C13.33 13.08 13.33 13.08 13.32 13.08C12.83 13.08 12.38 12.82 12.13 12.4C11.88 11.97 11.88 11.44 12.13 11.02C12.81 9.85 13.6 8.52 14.32 7.36C14.64 6.85 15.25 6.62 15.82 6.78C16.39 6.95 16.79 7.47 16.78 8.07V11.59H17C17.41 11.59 17.75 11.93 17.75 12.34C17.75 12.75 17.41 13.08 17 13.08Z"
        fill="currentColor"
      />
      <path
        d="M15.2891 11.5796V8.63965C14.6991 9.59965 14.0891 10.6296 13.5391 11.5696H15.2891V11.5796Z"
        fill="currentColor"
      />
    </svg>
  );
}

function SettingsIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path d="M12 8.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7Z" stroke="currentColor" strokeWidth="1.7" />
      <path d="M19.4 15a8.2 8.2 0 0 0 .1-1l2-1.5-2-3.4-2.4 1a7.8 7.8 0 0 0-1.7-1L15 6.5h-4l-.4 2.6c-.6.3-1.2.6-1.7 1l-2.4-1-2 3.4 2 1.5a8.2 8.2 0 0 0 .1 2l-2 1.5 2 3.4 2.4-1c.5.4 1.1.7 1.7 1l.4 2.6h4l.4-2.6c.6-.3 1.2-.6 1.7-1l2.4 1 2-3.4-2-1.5c0-.3-.1-.6-.2-1Z" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function LogoutIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path d="M10 5H7a4 4 0 0 0 0 14h3M15 8l4 4-4 4M19 12H8" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function SearchIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="1.7" />
      <path d="m16.5 16.5 4 4" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
    </svg>
  );
}

function BellIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path d="M18 9.5a6 6 0 1 0-12 0c0 6-2 6.5-2 8h16c0-1.5-2-2-2-8Z" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M10 20a2.3 2.3 0 0 0 4 0" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
    </svg>
  );
}

function CloseIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path d="m6 6 12 12M18 6 6 18" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
    </svg>
  );
}

function ArrowUpRightIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path d="M7 17 17 7M9 7h8v8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function ClockIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.8" />
      <path d="M12 7v5l3 2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function StretchIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path d="M9 4.5a1.7 1.7 0 1 0 0 3.4 1.7 1.7 0 0 0 0-3.4Z" fill="currentColor" />
      <path d="M9.5 9.5v4.2l-2.4 3.8M10.2 11.4l2.5 2.3 2.5-1.6M8.7 13.5l3.5 5.4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function PrescriptionIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path d="M7 4h5.2a4.1 4.1 0 0 1 0 8.2H7V4ZM7 12.2V20M11 15.5 17 20M15.5 15.5 11.5 20" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function SmileIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <circle cx="12" cy="12" r="8" fill="currentColor" opacity="0.9" />
      <path d="M8.5 13.5c1.2 1.4 5.8 1.4 7 0M9.5 10h.01M14.5 10h.01" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function DietIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path d="M7 8.5A4.5 4.5 0 0 1 11.5 4h1A4.5 4.5 0 0 1 17 8.5V18a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2V8.5Z" fill="currentColor" />
      <path d="M9.5 10.5h5M10 14h4" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function CalendarSolidIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <rect x="4" y="6" width="16" height="14" rx="3" fill="currentColor" />
      <path d="M8 4v4M16 4v4M7.5 11h9" stroke="white" strokeWidth="1.6" strokeLinecap="round" />
      <path d="M8.5 14h.01M12 14h.01M15.5 14h.01" stroke="white" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

function DocumentNormalIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path d="M7 3.5h6.2L18 8.3V19a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V5.5a2 2 0 0 1 2-2Z" fill="currentColor" opacity="0.9" />
      <path d="M13 4v4.5h4.5M8.5 13h7M8.5 16h5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function WeightIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <rect x="5" y="7" width="14" height="12" rx="4" fill="currentColor" />
      <path d="M9.5 10.5h5M12 10.5v2" stroke="white" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

function ContactBookIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <rect x="6" y="4" width="13" height="16" rx="3" fill="currentColor" opacity="0.55" />
      <path d="M4 8h4M4 12h4M4 16h4M12.5 10.2a1.7 1.7 0 1 0 0 3.4 1.7 1.7 0 0 0 0-3.4ZM9.5 17c.7-1.5 1.7-2.2 3-2.2s2.3.7 3 2.2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function LocationPinIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path d="M12 21s7-5.1 7-11a7 7 0 1 0-14 0c0 5.9 7 11 7 11Z" fill="currentColor" opacity="0.65" />
      <circle cx="12" cy="10" r="2.3" fill="white" />
    </svg>
  );
}

function CheckIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path d="m6 12.5 4 4L18 8" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function FilterIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path d="M5 7h8M17 7h2M11 17h8M5 17h2" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
      <circle cx="15" cy="7" r="2" stroke="currentColor" strokeWidth="1.7" />
      <circle cx="9" cy="17" r="2" stroke="currentColor" strokeWidth="1.7" />
    </svg>
  );
}

function DocumentDownloadIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path d="M9 11v6l2-2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="m9 17-2-2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M22 10v5c0 5-2 7-7 7H9c-5 0-7-2-7-7V9c0-5 2-7 7-7h5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M22 10h-4c-3 0-4-1-4-4V2l8 8Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function TuneIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path d="M3 7h6M15 7h6M12 7a3 3 0 1 0-6 0 3 3 0 0 0 6 0Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M3 17h6M15 17h6M18 17a3 3 0 1 0-6 0 3 3 0 0 0 6 0Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function ChevronDownIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path d="m6 9 6 6 6-6" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function ChevronUpIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path d="m6 15 6-6 6 6" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function ClipboardTextIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path d="M9 5.5h6M9.6 3h4.8c1 0 1.6.6 1.6 1.6v1.8c0 1-.6 1.6-1.6 1.6H9.6C8.6 8 8 7.4 8 6.4V4.6C8 3.6 8.6 3 9.6 3Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M16 5h1.5C19.4 5 20 6.1 20 7.8V18c0 2.5-1.5 3-3 3H7c-1.5 0-3-.5-3-3V7.8C4 6.1 4.6 5 6.5 5H8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M8 13h8M8 17h5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function SendIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path d="M21.4 2.6 10.9 13.1M21.4 2.6l-6.7 18.1-3.8-7.6-7.6-3.8L21.4 2.6Z" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function InfoCircleIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <circle cx="12" cy="12" r="9" fill="white" opacity="0.85" />
      <path d="M12 10.5v5M12 8.2h.01" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function KebabIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <circle cx="12" cy="5" r="1.6" fill="currentColor" />
      <circle cx="12" cy="12" r="1.6" fill="currentColor" />
      <circle cx="12" cy="19" r="1.6" fill="currentColor" />
    </svg>
  );
}

function ChevronDownSmallIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 16 16" fill="none" className={className} aria-hidden="true">
      <path d="m4 6 4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function ChevronLeftIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path d="m15 6-6 6 6 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function ChevronRightIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path d="m9 6 6 6-6 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function MailIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path d="M17 20.5H7C4 20.5 2 19 2 15.5V8.5C2 5 4 3.5 7 3.5H17C20 3.5 22 5 22 8.5V15.5C22 19 20 20.5 17 20.5Z" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M17 9L13.87 11.5C12.84 12.32 11.15 12.32 10.12 11.5L7 9" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function LockThinIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path d="M6 10V8C6 4.69 7 2 12 2C17 2 18 4.69 18 8V10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M17 22H7C3 22 2 21 2 17V15C2 11 3 10 7 10H17C21 10 22 11 22 15V17C22 21 21 22 17 22Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M15.9965 16H16.0054" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M11.9955 16H12.0045" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M7.9945 16H8.0035" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function EyeSlashIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path d="M14.53 9.47L9.47 14.53C8.82 13.88 8.42 12.99 8.42 12C8.42 10.02 10.02 8.42 12 8.42C12.99 8.42 13.88 8.82 14.53 9.47Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M17.82 5.77C16.07 4.45 14.07 3.73 12 3.73C8.47 3.73 5.18 5.81 2.89 9.41C1.99 10.82 1.99 13.19 2.89 14.6C3.68 15.84 4.6 16.91 5.6 17.77" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M8.42 19.53C9.56 20.01 10.77 20.27 12 20.27C15.53 20.27 18.82 18.19 21.11 14.59C22.01 13.18 22.01 10.81 21.11 9.4C20.78 8.88 20.42 8.39 20.05 7.93" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M15.51 12.7C15.25 14.11 14.1 15.26 12.69 15.52" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M9.47 14.53L2 22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M22 2L14.53 9.47" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
