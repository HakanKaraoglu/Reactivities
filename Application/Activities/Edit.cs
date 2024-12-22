using AutoMapper;
using Domain;
using MediatR;
using Persistence;

namespace Application.Activities;

public class Edit
{
    public class Command : IRequest
    {
        public Activity Activity { get; set; }
    }

    public class Handler(DataContext dataContext, IMapper mapper) : IRequestHandler<Command>
    {
        public async Task Handle(Command request, CancellationToken cancellationToken)
        {
            var activity = await dataContext.Activities.FindAsync(request.Activity.Id).ConfigureAwait(false);

            mapper.Map(request.Activity, activity);

            await dataContext.SaveChangesAsync(cancellationToken).ConfigureAwait(false);
        }
    }
}