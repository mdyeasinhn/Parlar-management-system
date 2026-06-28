type ServiceDetailPageProps = {
    params: Promise<{ serviceId: string }>;
};

const ServiceDetailPage = async ({ params }: ServiceDetailPageProps) => {
    const { serviceId } = await params;

    return <div>service detail page for serviceId: {serviceId}</div>;
};

export default ServiceDetailPage;