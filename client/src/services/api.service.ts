export class ApiService {
  public async getDogs(take: number, page: number): Promise<any> {
      const response = await fetch(`/api/dogs/${take}/${page}`);
      return await response.json();
  }

  public async addDog(dog: any) {
      const response = await fetch(`/api/dogs`, {
          method: 'POST',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify(dog)
        })
      return await response.json();
  }
}
