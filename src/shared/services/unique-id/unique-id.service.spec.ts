import { UniqueIdService } from './unique-id.service';
describe(UniqueIdService.name, () => {
  let service: UniqueIdService = null;
  beforeEach(() => {
    service = new UniqueIdService();
  });

  it(`#${UniqueIdService.prototype.generateUniqueIdWithPrefix.name}
   should generate id when called with prefix`, () => {
    const id = service.generateUniqueIdWithPrefix('app');
    expect(id.startsWith('app-')).toBeTrue();
  });

  it(`#${UniqueIdService.prototype.generateUniqueIdWithPrefix.name}
   should not generate id duplicate when called multiple times`, () => {
    const numberOfGeneratedIds = 50;
    const ids = new Set();
    for (let i = 0; i < numberOfGeneratedIds; i++) {
      ids.add(service.generateUniqueIdWithPrefix('app'));
    }
    expect(ids.size).toBe(50);
  });

  it(`#${UniqueIdService.prototype.getNumberOfGeneratedIds.name}
   should return the number of generatedIds when called`, () => {
    service.generateUniqueIdWithPrefix('app');
    service.generateUniqueIdWithPrefix('app');
    expect(service.getNumberOfGeneratedIds()).toBe(2);
  });

  it(`#${UniqueIdService.prototype.generateUniqueIdWithPrefix.name}
   should throw error when called with parameter empty`, () => {
    const emptyValues = [null, '', undefined];
    emptyValues.forEach((emptyValue) => {
      expect(() => {
        service.generateUniqueIdWithPrefix(emptyValue);
      })
        .withContext(`Empty value: ${emptyValue}`)
        .toThrow();
    });
  });

  it(`#${UniqueIdService.prototype.generateUniqueIdWithPrefix.name}
   should throw error when called with parameter that contain number`, () => {
    const valuesContainingNumbers = ['54asd', '654'];
    valuesContainingNumbers.forEach((valuesContainingNumber) => {
      expect(() => {
        service.generateUniqueIdWithPrefix(valuesContainingNumber);
      })
        .withContext(`Value contain number: ${valuesContainingNumber}`)
        .toThrow();
    });
  });
});
