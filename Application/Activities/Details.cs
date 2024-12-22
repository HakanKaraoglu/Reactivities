using Domain;
using MediatR;
using Persistence;

namespace Application.Activities;

public class Details
{
    public class Query : IRequest<Activity>
    {
        public Guid Id { get; set; }
    }

    public class Handler(DataContext dataContext) : IRequestHandler<Query, Activity>
    {
        public async Task<Activity> Handle(Query request, CancellationToken cancellationToken)
        {
            return await dataContext.Activities.FindAsync(request.Id, cancellationToken).ConfigureAwait(false);
        }
    }
}