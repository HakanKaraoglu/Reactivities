using Domain;
using MediatR;
using Microsoft.EntityFrameworkCore;
using Persistence;

namespace Application.Activities;

public class List
{
    public class Query : IRequest<List<Activity>> { }

    public class Handler(DataContext dataContext) : IRequestHandler<Query, List<Activity>>
    {
        public async Task<List<Activity>> Handle(Query request, CancellationToken cancellationToken)
        {
            return await dataContext.Activities.ToListAsync(cancellationToken).ConfigureAwait(false);
        }
    }
}