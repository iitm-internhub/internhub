import VerifyMail from "@/components/shared/VerifyMail";
import React, { Suspense } from "react";

const MailVerification = () => {
  return (
    <Suspense fallback={<>Loading</>}>
      <VerifyMail />
    </Suspense>
  );
};

export default MailVerification;
