"use client";

import Image from "next/image";
import { useState } from "react";

import { RevenueChart } from "@/components/dashboard/revenue-chart";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

const navSections = [
  { label: "Overview", section: "overview", icon: OverviewIcon },
  { label: "Member", section: "members", icon: MembersIcon },
  { label: "Trainer", section: "trainers", icon: TrainerIcon },
  { label: "Verification", section: "verification", icon: ShieldIcon },
  { label: "Transactions", section: "transactions", icon: CardIcon },
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

type DashboardSection =
  | "overview"
  | "members"
  | "trainers"
  | "verification"
  | "transactions"
  | "settings";

export default function Home() {
  const [activeSection, setActiveSection] =
    useState<DashboardSection>("overview");

  return (
    <main className="h-screen overflow-hidden bg-white text-[#121212]">
      <div className="grid h-screen lg:grid-cols-[272px_minmax(0,1fr)]">
        <Sidebar activeSection={activeSection} onNavigate={setActiveSection} />
        <div className="flex min-h-0 min-w-0 flex-col">
          <Topbar />
          <section
            aria-labelledby={`${activeSection}-title`}
            className="flex min-h-0 flex-1 w-full flex-col gap-6 overflow-hidden px-6 py-6 lg:px-8"
          >
            {activeSection === "overview" ? <OverviewSection /> : null}
            {activeSection === "members" ? <MemberSection /> : null}
            {activeSection === "trainers" ? <TrainerSection /> : null}
            {activeSection !== "overview" &&
            activeSection !== "members" &&
            activeSection !== "trainers" ? (
              <ComingSoonSection section={activeSection} />
            ) : null}
          </section>
        </div>
      </div>
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
}: {
  activeSection: DashboardSection;
  onNavigate: (section: DashboardSection) => void;
}) {
  return (
    <aside className="flex h-screen overflow-hidden border-b border-[#e0e0e0] bg-white px-[18px] py-[30px] lg:flex-col lg:border-b-0 lg:border-r">
      <div className="flex min-h-0 w-full flex-col gap-[27px]">
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

          <SidebarLink label="Logout" icon={LogoutIcon} />
        </nav>
      </div>
    </aside>
  );
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
      <Icon className="size-6 shrink-0" />
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
        <Button
          aria-label="Notifications"
          size="icon"
          variant="ghost"
          className="size-[46px] rounded-full border-b-2 border-[#f7869a] bg-[#f7f7f7] shadow-[0_1px_3px_rgba(0,0,0,0.1)] hover:bg-[#f7f7f7]"
        >
          <BellIcon className="size-6" />
        </Button>
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

function MemberSection() {
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

function TrainerSection() {
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

function ComingSoonSection({ section }: { section: DashboardSection }) {
  const title =
    section === "trainers"
      ? "Trainer"
      : section === "verification"
        ? "Verification"
        : section === "transactions"
          ? "Transactions"
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

type IconComponent = (props: { className?: string }) => React.ReactElement;

function OverviewIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <rect x="3" y="3" width="7" height="8" rx="1.5" fill="currentColor" />
      <rect x="14" y="3" width="7" height="5" rx="1.5" fill="currentColor" />
      <rect x="3" y="14" width="7" height="7" rx="1.5" fill="currentColor" />
      <rect x="14" y="11" width="7" height="10" rx="1.5" fill="currentColor" />
    </svg>
  );
}

function MembersIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <circle cx="9" cy="8" r="3.5" stroke="currentColor" strokeWidth="1.7" />
      <path d="M3.5 20c.7-3.1 2.7-5 5.5-5s4.8 1.9 5.5 5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
      <path d="M16 5.5a3 3 0 0 1 0 5.9M17.3 15.2c1.8.7 3 2.3 3.4 4.8" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
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
