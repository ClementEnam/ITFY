// ITFY branding on the admin login screen and in the admin's top corner.

export function Logo() {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src="/logo/logo.png" alt="" width={56} height={56} style={{ objectFit: "contain" }} />
      <span style={{ fontSize: 22, fontWeight: 700, lineHeight: 1.2 }}>
        IT For Youth Ghana
        <span style={{ display: "block", fontSize: 14, fontWeight: 400, opacity: 0.6 }}>Website editor</span>
      </span>
    </div>
  );
}

export function Icon() {
  // eslint-disable-next-line @next/next/no-img-element
  return <img src="/logo/logo.png" alt="ITFY" width={28} height={28} style={{ objectFit: "contain" }} />;
}
