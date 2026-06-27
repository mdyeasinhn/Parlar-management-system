
const ServiceDetailPage = ({ params}) => {
    const serviceId = params.serviceId;
    console.log('serviceId', serviceId);
    return (
        <div>
            servce detail page for serviceId: {serviceId}
        </div>
    );
};

export default ServiceDetailPage;