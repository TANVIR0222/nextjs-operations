const daynamic = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;

  console.log(params);
  return <div>daynamic{id}</div>;
};

export default daynamic;
