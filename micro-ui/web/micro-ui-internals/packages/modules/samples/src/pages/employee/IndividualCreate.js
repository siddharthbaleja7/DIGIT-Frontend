import React,{useState} from "react";
import { useTranslation } from "react-i18next";
import { useHistory } from "react-router-dom";
import { FormComposerV2, Header,Toast } from "@egovernments/digit-ui-react-components";
import { newConfig } from "../../configs/IndividualCreateConfig";
import { transformCreateData } from "../../utils/createUtils";



const IndividualCreate = () => {
  const tenantId = Digit.ULBService.getCurrentTenantId();
  const [showToast, setShowToast] = useState(null);
  const { t } = useTranslation();
  const history = useHistory();
  const reqCreate = {
    url: `/egov-hrms/employees/_create`,
    params: {},
    body: {},
    config: {
      enable: true,
    },
  };

  const mutation = Digit.Hooks.useCustomAPIMutationHook(reqCreate);

  const onSubmit = async(data) => {
    console.log(data, "data");
    await mutation.mutate(
      {
        url: `/egov-hrms/employees/_create`,
        params: { tenantId },
        body: transformCreateData(data),
        config: {
          enable: true,
        },
      },{
        onSuccess:(data)=>{
          setShowToast({ key: "success", label: "Individual Created Successfully" });
        },
        onError:(error) => {
          setShowToast({ key: "error", label: "Individual Creation Failed"});
        }
      }
    );
  };
  return (
    <div>
      <Header> {t("CREATE_INDIVIDUAL")}</Header>
      <FormComposerV2
        label={t("SUBMIT_BUTTON")}
        config={newConfig.map((config) => {
          return {
            ...config,
          };
        })}
        defaultValues={{}}
        onFormValueChange ={ (setValue, formData, formState, reset, setError, clearErrors, trigger, getValues) => {
          console.log(formData, "formData");
        }}
        onSubmit={(data,) => onSubmit(data, )}
        fieldStyle={{ marginRight: 0 }}
      />
       {showToast && (
                <Toast style={{ zIndex: 10001 }}
                    label={showToast.label}
                    type={showToast.key}
                    error={showToast.key === "error"}
                    onClose={() => setShowToast(null)}
                />
            )}
    </div>
  );
}

export default IndividualCreate;