using Domain;
using MediatR;
using Persistence;

namespace Application.Activities;

public class Create
{
    public class Command : IRequest
    {
        public Activity Activity { get; set; }
    }

    public class Handler(DataContext dataContext) : IRequestHandler<Command>
    {
        public async Task Handle(Command request, CancellationToken cancellationToken)
        {
            dataContext.Activities.Add(request.Activity);

            await dataContext.SaveChangesAsync(cancellationToken);
        }
    }
}