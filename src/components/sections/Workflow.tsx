import { getServerTranslations } from "@/lib/server-intl";
import { WorkflowClient } from "./WorkflowClient";

const WORKFLOW_STEPS_SCHEMA = [
    { key: "analysis", icon: "bar-chart", threshold: 0.15 },
    { key: "model", icon: "brain", threshold: 0.35 },
    { key: "connection", icon: "share", threshold: 0.55 },
    { key: "launch", icon: "rocket", threshold: 0.75 },
    { key: "analytics", icon: "activity", threshold: 0.90 }
];

export async function Workflow() {
    const { t } = await getServerTranslations();

    const steps = WORKFLOW_STEPS_SCHEMA.map(item => ({
        ...item,
        title: t(`Workflow.steps.${item.key}.title`),
        desc: t(`Workflow.steps.${item.key}.desc`)
    }));

    return (
        <>
            {/* SEO Content for indexing */}
            <div className="sr-only">
                <h2>{t("Workflow.title")}</h2>
                <p>{t("Workflow.description")}</p>
                {steps.map((step, i) => (
                    <div key={i}>
                        <h3>{step.title}</h3>
                        <p>{step.desc}</p>
                    </div>
                ))}
            </div>
            <WorkflowClient
                steps={steps}
                tBadge={t("Workflow.badge")}
                tTitle={t("Workflow.title")}
                tDescription={t("Workflow.description")}
                tStepLabel={t("Workflow.step")}
            />
        </>
    );
}
