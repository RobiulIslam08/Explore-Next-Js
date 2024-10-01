export async function PATCH(request, {params}) {
	const body = await request.json();
	const index = comments.findIndex(c => c.id ===  parseInt(params.id) )
	comments[index] ={
		text: body.text
	}
	return Response.json({
		message:'comment updated',
		comments
	})
}

export async function DELETE(request, {params}) {
	const newComment = comments.filter(c=> c.id !== parseInt(params.id))
	return Response.json({
		message: 'comment delete successful',
		newComment
	})
}

const comments = [
	{
		id: 1,
		text: 'comments 1'
	},
	{
		id: 2,
		text: 'comments 2'
	},
	{
		id: 3,
		text: 'comments 3'
	},
	{
		id: 4,
		text: 'comments 4'
	},
]