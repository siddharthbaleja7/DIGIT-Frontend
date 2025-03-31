import { HRIcon, EmployeeModuleCard, AttendanceIcon, PropertyHouse } from "@egovernments/digit-ui-react-components";
import React from "react";
import { useTranslation } from "react-i18next";

const SampleCard = () => {
 
  const { t } = useTranslation();

  const propsForModuleCard = {
    moduleName: t("Water"),
    Icon: "BeenHere",
    
    kpis: [

    ],
    links: [
      {
        label: t("Inbox"),
        link: `/${window?.contextPath}/employee/sample/inbox`,
      },
      {
        label: t("Apply for Connection"),
        link: `/${window?.contextPath}/employee/sample/apply-connection`,
      },
 
      {
        label: t("Search Connection"),
        link: `/${window?.contextPath}/employee/sample/search-connection`,
      },
      
      
    ],
  };

  return <EmployeeModuleCard {...propsForModuleCard} />;
};

export default SampleCard;