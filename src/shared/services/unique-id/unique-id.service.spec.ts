import { UniqueIdService } from './unique-id.service';
describe(UniqueIdService.name, () => {
  it(`${UniqueIdService.prototype.generateUniqueIdWithPrefix.name} should generate id when called with prefix`, () => {
    const service = new UniqueIdService();
    const id = service.generateUniqueIdWithPrefix('app');
    expect(id.startsWith('app-')).toBeTrue();
  });

  it(`${UniqueIdService.prototype.generateUniqueIdWithPrefix.name} should not generate id duplicate when called multiple times`, () => {
    const numberOfGeneratedIds = 50;
    const service = new UniqueIdService();
    const ids = new Set();
    for (let i = 0; i < numberOfGeneratedIds; i++) {
      ids.add(service.generateUniqueIdWithPrefix('app'));
    }
    expect(ids.size).toBe(50);
  });
});
