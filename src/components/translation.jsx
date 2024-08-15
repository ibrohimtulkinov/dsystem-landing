import { useTranslation } from "../hooks/useTranslation";

const Translation = ({ text }) => {
  const { t } = useTranslation();
  return t(text);
};

export default Translation;