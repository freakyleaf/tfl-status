export default function serviceStatusIncludes({ service, statusDescription }) {
  return service?.statusesConformed.some((status) => status.description === statusDescription);
}
