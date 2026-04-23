
type UserSwitchProps = {
  activeUser: string;
};

function UserLink({
  href,
  active,
  label,
}: {
  href: string;
  active: boolean;
  label: string;
}) {
  return (
    <a
      href={href}
      className={`dashboard-user-link${active ? " active" : ""}`}
    >
      {label}
    </a>
  );
}

export default function UserSwitch({ activeUser }: UserSwitchProps) {
  return (
    <div className="dashboard-switch-grid">
      <UserLink
        href="/?user=1"
        active={activeUser === "1"}
        label="Utilisateur 1"
      />
      <UserLink
        href="/?user=2"
        active={activeUser === "2"}
        label="Utilisateur 2"
      />
    </div>
  );
}
