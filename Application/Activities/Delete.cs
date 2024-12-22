using MediatR;
using Persistence;

namespace Application.Activities;

public class Delete
{
    public class Command : IRequest
    {
        public Guid Id { get; set; }
    }

    public class Handler(DataContext dataContext) : IRequestHandler<Command>
    {
        public async Task Handle(Command request, CancellationToken cancellationToken)
        {
            var activity = await dataContext.Activities.FindAsync(request.Id).ConfigureAwait(false);
            dataContext.Activities.Remove(activity);
            await dataContext.SaveChangesAsync(cancellationToken);
        }
    }
}