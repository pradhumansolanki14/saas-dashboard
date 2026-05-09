import ProfileSettings from "../components/settings/ProfileSettings";

import AppearanceSettings from "../components/settings/AppearanceSettings";

import NotificationSettings from "../components/settings/NotificationSettings";

import BillingSettings from "../components/settings/BillingSettings";

import SectionHeader from "../components/ui/SectionHeader";

const Settings = () => {
  return (
    <div className="space-y-6">
      {/* HEADER */}
      <SectionHeader
        title="Settings"
        subtitle="Manage account preferences and system configuration."
      />

      {/* GRID */}
      <div
        className="
        grid
        grid-cols-1
        xl:grid-cols-3

        gap-6
      "
      >
        {/* LEFT */}
        <div className="xl:col-span-2 space-y-6">
          <ProfileSettings />

          <NotificationSettings />
        </div>

        {/* RIGHT */}
        <div className="space-y-6">
          <AppearanceSettings />

          <BillingSettings />
        </div>
      </div>
    </div>
  );
};

export default Settings;