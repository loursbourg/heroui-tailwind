import DefaultLayout from "@/layouts/default";
import GridSection from "@/containers/grid-section";
import HorizontalRuleSection from "@/containers/horizontal-rule-section";
import ChipsSection from "@/containers/chips-section";
import ButtonSection from "@/containers/button-section";
import InputFieldsSection from "@/containers/input-fields-section";

export default function IndexPage() {
  return (
    <DefaultLayout>
      <InputFieldsSection />
      <ButtonSection />
      <ChipsSection />
      <GridSection />
      <HorizontalRuleSection />
    </DefaultLayout>
  );
}
